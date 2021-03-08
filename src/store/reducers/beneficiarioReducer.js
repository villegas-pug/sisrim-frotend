import {
   FIND_BENEFICIARIO_LOADING,
   FIND_BENEFICIARIO_SUCCESS,
   FIND_BENEFICIARIO_ERROR,
   FIND_PARENTESCO_LOADING,
   FIND_PARENTESCO_SUCCESS,
   FIND_PARENTESCO_ERROR,
   FIND_ADICIONAL_LOADING,
   FIND_ADICIONAL_SUCCESS,
   FIND_ADICIONAL_ERROR,
   FIND_DIRECCION_LOADING,
   FIND_DIRECCION_SUCCESS,
   FIND_DIRECCION_ERROR,
   FIND_CONTACTO_LOADING,
   FIND_CONTACTO_SUCCESS,
   FIND_CONTACTO_ERROR,
} from 'store/types/beneficiarioType'

const initialValues = {
   beneficiario: { loading: false, data: [], error: null },
   parentesco: { loading: false, data: [], error: null },
   adicional: { loading: false, data: [], error: null },
   direccion: { loading: false, data: [], error: null },
   contacto: { loading: false, data: [], error: null },
}

export default function beneficiarioReducer(state = initialValues, { type, payload }) {
   switch (type) {
      case FIND_BENEFICIARIO_LOADING:
         return { ...state, beneficiario: { loading: true, data: [], error: null } }
      case FIND_BENEFICIARIO_SUCCESS:
         return { ...state, beneficiario: { loading: false, data: payload, error: null } }
      case FIND_BENEFICIARIO_ERROR:
         return { ...state, beneficiario: { loading: false, data: [], error: payload } }
      case FIND_PARENTESCO_LOADING:
         return { ...state, parentesco: { loading: true, data: [], error: null } }
      case FIND_PARENTESCO_SUCCESS:
         return { ...state, parentesco: { loading: false, data: payload, error: null } }
      case FIND_PARENTESCO_ERROR:
         return { ...state, parentesco: { loading: false, data: [], error: payload } }
      case FIND_ADICIONAL_LOADING:
         return { ...state, adicional: { loading: true, data: [], error: null } }
      case FIND_ADICIONAL_SUCCESS:
         return { ...state, adicional: { loading: false, data: payload, error: null } }
      case FIND_ADICIONAL_ERROR:
         return { ...state, adicional: { loading: false, data: [], error: payload } }
      case FIND_DIRECCION_LOADING:
         return { ...state, direccion: { loading: true, data: [], error: null } }
      case FIND_DIRECCION_SUCCESS:
         return { ...state, direccion: { loading: false, data: payload, error: null } }
      case FIND_DIRECCION_ERROR:
         return { ...state, direccion: { loading: false, data: [], error: payload } }
      case FIND_CONTACTO_LOADING:
         return { ...state, contacto: { loading: true, data: [], error: null } }
      case FIND_CONTACTO_SUCCESS:
         return { ...state, contacto: { loading: false, data: payload, error: null } }
      case FIND_CONTACTO_ERROR:
         return { ...state, contacto: { loading: false, data: [], error: payload } }
      default:
         return state
   }
}