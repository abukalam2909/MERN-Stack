import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    CREATE_PRODUCT_REQUEST,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_FAILURE,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAILURE,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILURE,
} from "../actions/productActions";

const initialState = {
    items: [],
    loading: false,
    error: null,
    createLoading : false,
    updateLoading : false,
    deleteLoading : false
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_PRODUCTS_SUCCESS:
            return { ...state, loading: false, items: action.payload };
        case FETCH_PRODUCTS_FAILURE:
            return { ...state, loading: false, error: action.payload };

        case CREATE_PRODUCT_REQUEST:
            return { ...state, createLoading: true, error: null };
        case CREATE_PRODUCT_SUCCESS:
            return { ...state, createLoading: false, items: [...state.items, action.payload] };
        case CREATE_PRODUCT_FAILURE:
            return { ...state, createLoading: false, error: action.payload };

        case UPDATE_PRODUCT_REQUEST:
            return { ...state, updateLoading: true, error: null };
        case UPDATE_PRODUCT_SUCCESS:
            const updatedItems = state.items.map(item =>
                item.id === action.payload.id ? action.payload : item
            );
            return { ...state, updateLoading: false, items: updatedItems };
        case UPDATE_PRODUCT_FAILURE:
            return { ...state, updateLoading: false, error: action.payload };

        case DELETE_PRODUCT_REQUEST:
            return { ...state, deleteLoading: true, error: null };
        case DELETE_PRODUCT_SUCCESS:
            const filteredItems = state.items.filter(item => item.id !== action.payload);
            return { ...state, deleteLoading: false, items: filteredItems };
        case DELETE_PRODUCT_FAILURE:
            return { ...state, deleteLoading: false, error: action.payload };

        default:
            return state;
    }
}

export default productReducer;