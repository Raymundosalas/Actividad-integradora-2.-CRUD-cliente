const express = require('express');
const router = express.Router();
const fs = require('fs-extra');

const path = './data/data.json';

// Obtener todos
router.get('/', async (req, res) => {
    const data = await fs.readJson(path);
    res.json(data);
});

// Obtener uno
router.get('/:id', async (req, res) => {
    const data = await fs.readJson(path);
    const item = data.find(i => i.id == req.params.id);
    res.json(item);
});

// Crear
router.post('/', async (req, res) => {
    const data = await fs.readJson(path);
    const newItem = { id: Date.now(), ...req.body };
    data.push(newItem);
    await fs.writeJson(path, data);
    res.json(newItem);
});

// Actualizar
router.put('/:id', async (req, res) => {
    let data = await fs.readJson(path);
    data = data.map(i => i.id == req.params.id ? { ...i, ...req.body } : i);
    await fs.writeJson(path, data);
    res.json({ mensaje: "Actualizado" });
});

// Eliminar
router.delete('/:id', async (req, res) => {
    let data = await fs.readJson(path);
    data = data.filter(i => i.id != req.params.id);
    await fs.writeJson(path, data);
    res.json({ mensaje: "Eliminado" });
});

module.exports = router;
