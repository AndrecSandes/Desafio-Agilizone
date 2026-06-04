const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const couriers = require('./data/couriers.json');
const orders = require('./data/orders.json');

function distance(lat1, lng1, lat2, lng2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) ** 2 +
              Math.cos(lat1 * Math.PI / 180) *
              Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLng / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

app.get('/api/assign', (req, res) => {
    const available = couriers.filter(c => c.status === 'Disponível');
    const busy = couriers.filter(c => c.status === 'Ocupado');
    const result = [];
    const used = [];

    for (const order of orders) {
        if (order.pickup_lat > 90 || order.pickup_lat < -90) {
            result.push({order: order.id, courier: null, reason: 'Coordenada Inválida'});
            continue;
        }

        const free = available.filter(c => !used.includes(c.id));
        
        if (free.length === 0) {
            result.push({order: order.id, courier: null, reason: 'Sem entregador livre'});
            continue;
        }

        let best = free[0];
        let bestDist = distance(order.pickup_lat, order.pickup_lng, best.lat, best.lng);

        for (const c of free) {
            const d = distance(order.pickup_lat, order.pickup_lng, c.lat, c.lng);
            if (d < bestDist) {
                bestDist = d;
                best = c;
            }
        }

        used.push(best.id);
        result.push({order: order.id, courier: best.name, distance: bestDist.toFixed(2) + ' km'});
    }

    res.json({
        assignments: result,
        busy: busy.map(c => c.name)
    });
});


app.get('/api/couriers', (req, res) => {
    const couriersWithDefault = couriers.map(c => ({
        ...c,
        status: c.status || 'Disponível' 
    }));
    res.json(couriersWithDefault);
});


app.get('/api/orders', (req, res) => {
    res.json(orders);
});

app.listen(3001, () => console.log('Rodando na porta 3001'));