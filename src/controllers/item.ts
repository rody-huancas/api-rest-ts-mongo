import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handle';
import { deleteCar, getCar, getCars, insertCar, updateCar } from '../services/item';

const getItem = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await getCar(id);
        const data = response ? response : "NOT_FOUND";
        res.send(data)
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEM');
    }
}

const getItems = async (req: Request, res: Response) => {
    try {
        const response = await getCars();
        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEMS');
    }
}

const postItem = async ({ body }: Request, res: Response) => {
    try {
        const responseItema = await insertCar(body);
        res.send(responseItema);
    } catch (e) {
        handleHttp(res, 'ERROR_POST_ITEM', e);
    }
}

const updateItem = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await updateCar(id, req.body);
        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR_UPDATE_ITEM');
    }
}

const deleteItem = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await deleteCar(id);
        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_ITEM');
    }
}

export {
    getItem,
    getItems,
    updateItem,
    postItem,
    deleteItem
}