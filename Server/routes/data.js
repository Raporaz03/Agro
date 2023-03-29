const Router = require('express').Router();

const Finance = require('../models/Finance');
const Crops = require('../models/Crops');
const GovSchemes = require('../models/GovSchemes');
const NGO = require('../models/NGO');
const SHG = require('../models/SHG');
const Specialists = require('../models/Specialists');
const Stores = require('../models/Stores');
const WorkForce = require('../models/WorkForce');

//Get methods
Router.get('/finance', async (req, res) => {
    try {
        const finance = await Finance.find();
        res.status(200).json(finance);
    } catch (error) {
        console.log(error);
    }
});
Router.get('/crops', async (req, res) => {
    try {
        const crops = await Crops.find();
        res.status(200).json(crops);
    } catch (error) {Crops
        console.log(error);
    }
});
Router.get('/govSchemes', async (req, res) => {
    try {
        const govSchemes = await GovSchemes.find();
        res.status(200).json(govSchemes);
    } catch (error) {
        console.log(error);
    }
});
Router.get('/ngo', async (req, res) => {
    try {
        const ngo = await NGO.find();
        res.status(200).json(ngo);
    } catch (error) {
        console.log(error);
    }
});
Router.get('/shg', async (req, res) => {
    try {
        const shg = await SHG.find();
        res.status(200).json(shg);
    } catch (error) {
        console.log(error);
    }
});
Router.get('/stores', async (req, res) => {
    try {
        const stores = await Stores.find();
        res.status(200).json(stores);
    } catch (error) {
        console.log(error);
    }
});
Router.get('/workforce', async (req, res) => {
    try {
        const workforce = await WorkForce.find();
        res.status(200).json(workforce);
    } catch (error) {
        console.log(error);
    }
});
Router.get('/specialists', async (req, res) => {
    try {
        const specialists = await Specialists.find();
        res.status(200).json(specialists);
    } catch (error) {
        console.log(error);
    }
});

//Post methods
Router.post('/finance', async (req, res) => {
    try {
        const finance = await newFinance.save();
        res.status(200).json(finance);
    } catch (error) {
        console.log(error);
    }
});
Router.post('/crops', async (req, res) => {
    try {
        const crops = await newCrops.save();
        res.status(200).json(crops);
    } catch (error) {Crops
        console.log(error);
    }
});
Router.post('/govSchemes', async (req, res) => {
    try {
        const govSchemes = await newGovSchemes.save();
        res.status(200).json(govSchemes);
    } catch (error) {
        console.log(error);
    }
});
Router.post('/ngo', async (req, res) => {
    try {
        const ngo = await newNgo.save();
        res.status(200).json(ngo);
    } catch (error) {
        console.log(error);
    }
});
Router.post('/shg', async (req, res) => {
    try {
        const shg = await newShg.save();
        res.status(200).json(shg);
    } catch (error) {
        console.log(error);
    }
});
Router.post('/stores', async (req, res) => {
    try {
        const stores = await newStores.save();
        res.status(200).json(stores);
    } catch (error) {
        console.log(error);
    }
});
Router.post('/workforce', async (req, res) => {
    try {
        const workforce = await newWorkForce.save();
        res.status(200).json(workforce);
    } catch (error) {
        console.log(error);
    }
});
Router.post('/specialists', async (req, res) => {
    try {
        const specialists = await newSpecialists.save();
        res.status(200).json(specialists);
    } catch (error) {
        console.log(error);
    }
});

module.exports = Router;