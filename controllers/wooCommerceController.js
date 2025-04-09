const WooCommerceRestApi = require('@woocommerce/woocommerce-rest-api').default;

// Initialize WooCommerce API
const api = new WooCommerceRestApi({
  url: process.env.WOO_URL,
  consumerKey: process.env.WOO_CONSUMER_KEY,
  consumerSecret: process.env.WOO_CONSUMER_SECRET,
  version: 'wc/v3'
});

// Get all products
exports.getProducts = async (req, res, next) => {
  try {
    const { per_page = 10, page = 2 } = req.query;
    
    const response = await api.get('products', {
      per_page,
      page
    });
    console.log("headers", response.headers);
    
    res.status(200).json({
      status: 'success',
      totalPages: response.headers['x-wp-totalpages'],
      totalItems: response.headers['x-wp-total'],
      data: response.data
    });
  } catch (error) {
    next(error);
  }
};

// Get a specific product
exports.getProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await api.get(`products/${id}`);
    
    res.status(200).json({
      status: 'success',
      data: response.data
    });
  } catch (error) {
    next(error);
  }
};

// Get all orders
exports.getOrders = async (req, res, next) => {
  try {
    const { per_page = 20, page = 1 } = req.query;
    
    const response = await api.get('orders', {
      per_page,
      page
    });
    
    res.status(200).json({
      status: 'success',
      totalPages: response.headers['x-wp-totalpages'],
      totalItems: response.headers['x-wp-total'],
      data: response.data
    });
  } catch (error) {
    next(error);
  }
};

// Get a specific order
exports.getOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await api.get(`orders/${id}`);
    
    res.status(200).json({
      status: 'success',
      data: response.data
    });
  } catch (error) {
    next(error);
  }
};

exports.getCustomer = async (req, res, next) => {
  try {    
    const { id } = req.params;
    const response = await api.get(`customers/${id}`);
    
    res.status(200).json({
      status: 'success',
      totalPages: response.headers['x-wp-totalpages'],
      totalItems: response.headers['x-wp-total'],
      data: response.data
    });
  } catch (error) {
    next(error);
  }
}