const {
  validationResponse,
  successResponse,
  serverResponse,
} = require("../helper/responseHelper");
const { productModel } = require("../Models/productModel");

const addUpdateProduct = async (req, res) => {
  try {
    const { Product_SKU, BatchNumber, ExpiryDate, InwardQty } = req.body;

    // validation error
    if (!Product_SKU || !BatchNumber || !ExpiryDate) {
      return validationResponse(res, "Invalid Credentials");
    }

    const existingProduct = await productModel.findByPk(Product_SKU);

    if (existingProduct) {
      const updateProduct = await productModel.update({
        Product_SKU: Product_SKU,
        ExpirtyDate: ExpiryDate,
        InwardQty: InwardQty,
      });
      return successResponse(res, "Product Update Successfully", {
        data: updateProduct,
      });
    }
    const newProduct = await productModel.create(req.body);
    return successResponse(res, "Product Created Successfully", {
      data: newProduct,
    });
  } catch (error) {
    return serverResponse(res, error);
  }
};

const products = async (req, res) => {
  try {
    const products = await productModel.findAll({
      order: [["createdAt", "ASC"]],
    });

    const productlist = products.map((el) => ({
      BatchNumber: el.BatchNumber,
      Product_SKU: el.Product_SKU,
      ExpiryDate:el.ExpiryDate,
      InwardQty: el.InwardQty,
      CreatedAT: el.createdAt
    }));
    return successResponse(res, "Successfully Retrieved products", {
      data: productlist,
    });
  } catch (error) {
    return serverResponse(res, error);
  }
};

const optionLists = async (req, res) => {
  try {
    const productSKU = await productModel.findAll();

    const requiredProductSKU = productSKU.map((element) => element.Product_SKU);

    return successResponse(res, "Successfully Retrieved products", {
      data: requiredProductSKU,
    });
  } catch (error) {
    return serverResponse(res, error);
  }
};

module.exports = { addUpdateProduct, products, optionLists };
