import { useState, useEffect } from 'react';

export default function App() {
  const [couriers, setCouriers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [assignment, setAssignment] = useState(null);

  // Carrega entregadores e pedidos ao abrir a página
  useEffect(() => {
    fetch('http://localhost:3001/api/couriers')
      .then(res => res.json())
      .then(setCouriers);
    fetch('http://localhost:3001/api/orders')
      .then(res => res.json())
      .then(setOrders);
  }, []);

  async function handleAssign() {
    const res = await fetch('http://localhost:3001/api/assign');
    const json = await res.json();
    setAssignment(json);
  }

  return (
    <div>
      <h1>Despacho de Entregas</h1>

      <button onClick={handleAssign}>Atribuir Pedidos</button>

      <h2>Entregadores ({couriers.length})</h2>
      <ul>
        {couriers.map(c => (
          <li key={c.id}>{c.name} - {c.status === 'busy' ? 'Ocupado' : 'Disponível'}</li>
        ))}
      </ul>

      <h2>Pedidos ({orders.length})</h2>
      <ul>
        {orders.map(o => (
          <li key={o.id}>
            Pedido {o.id} - {o.created_at}
          </li>
        ))}
      </ul>

      {assignment && (
        <>
          <h2>Resultado da Atribuição</h2>
          <ul>
            {assignment.assignments.map(a => (
              <li key={a.order}>
                {a.order} → {a.courier || 'NÃO ATRIBUÍDO'}
                {a.distance && ` (${a.distance})`}
                {a.reason && ` - ${a.reason}`}
              </li>
            ))}
          </ul>

          <h2>Entregadores Ocupados</h2>
          <ul>
            {assignment.busy.map(name => <li key={name}>{name}</li>)}
          </ul>
        </>
      )}
    </div>
  );
}