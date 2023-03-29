const Router = require('express').Router();

const Finance = require('../models/Finance');
const Crops = require('../models/Crops');
const GovSchemes = require('../models/GovSchemes');
const NGO = require('../models/NGO');
const SHG = require('../models/SHG');
const Specialists = require('../models/Specialists');
const Stores = require('../models/Stores');
const WorkForce = require('../models/WorkForce');

Router.post('/finance', async (req, res) => {
    const newFinance = new Finance(req.body);
    try {
        const finance = await newFinance.save();
        res.status(200).json(finance);
    } catch (error) {
        console.log(error);
    }
});
Router.post('/crops', async (req, res) => {
    const newCrops = new Crops(req.body);
    try {
        const crops = await newCrops.save();
        res.status(200).json(crops);
    } catch (error) {Crops
        console.log(error);
    }
});
Router.post('/govSchemes', async (req, res) => {
    const newGovSchemes = new GovSchemes(req.body);
    try {
        const govSchemes = await newGovSchemes.save();
        res.status(200).json(govSchemes);
    } catch (error) {
        console.log(error);
    }
});
Router.post('/ngo', async (req, res) => {
    const newNgo = new NGO(req.body);
    try {
        const ngo = await newNgo.save();
        res.status(200).json(ngo);
    } catch (error) {
        console.log(error);
    }
});
Router.post('/shg', async (req, res) => {
    const newShg = new SHG(req.body);
    try {
        const shg = await newShg.save();
        res.status(200).json(shg);
    } catch (error) {
        console.log(error);
    }
});
Router.post('/stores', async (req, res) => {
    const newStores = new Stores(req.body);
    try {
        const stores = await newStores.save();
        res.status(200).json(stores);
    } catch (error) {
        console.log(error);
    }
});
Router.post('/workforce', async (req, res) => {
    const newWorkForce = new WorkForce(req.body);
    try {
        const workforce = await newWorkForce.save();
        res.status(200).json(workforce);
    } catch (error) {
        console.log(error);
    }
});
Router.post('/specialists', async (req, res) => {
    const newSpecialists = new Specialists(req.body);
    try {
        const specialists = await newSpecialists.save();
        res.status(200).json(specialists);
    } catch (error) {
        console.log(error);
    }
});

module.exports = Router;