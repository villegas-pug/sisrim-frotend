import api from 'config/api'
import Noty from 'helpers/noty'
import {
   SUCCESS,
   WARNNING,
   ERROR,
} from 'constants/levelLog'

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

const findBeneficiarioLoading = () => ({ type: FIND_BENEFICIARIO_LOADING })
const findBeneficiarioSuccess = (payload) => ({ type: FIND_BENEFICIARIO_SUCCESS, payload })
const findBeneficiarioError = (payload) => ({ type: FIND_BENEFICIARIO_ERROR, payload })

const findParentescoLoading = () => ({ type: FIND_PARENTESCO_LOADING })
const findParentescoSuccess = (payload) => ({ type: FIND_PARENTESCO_SUCCESS, payload })
const findParentescoError = (payload) => ({ type: FIND_PARENTESCO_ERROR, payload })

const findAdicionalLoading = () => ({ type: FIND_ADICIONAL_LOADING })
const findAdicionalSuccess = (payload) => ({ type: FIND_ADICIONAL_SUCCESS, payload })
const findAdicionalError = (payload) => ({ type: FIND_ADICIONAL_ERROR, payload })

const findDireccionLoading = () => ({ type: FIND_DIRECCION_LOADING })
const findDireccionSuccess = (payload) => ({ type: FIND_DIRECCION_SUCCESS, payload })
const findDireccionError = (payload) => ({ type: FIND_DIRECCION_ERROR, payload })

const findContactoLoading = () => ({ type: FIND_CONTACTO_LOADING })
const findContactoSuccess = (payload) => ({ type: FIND_CONTACTO_SUCCESS, payload })
const findContactoError = (payload) => ({ type: FIND_CONTACTO_ERROR, payload })

export const findBeneficiario = (payload) => async (dispatch) => {
   dispatch(findBeneficiarioLoading())
   const { data: { levelLog, data, message } } = await api({
      method: 'POST',
      url: '/findByFirstAndLastName',
      data: payload
   })

   switch (levelLog) {
      case SUCCESS:
         dispatch(findBeneficiarioSuccess(data))
         Noty(SUCCESS, message)
         break
      case WARNNING:
         dispatch(findBeneficiarioError(message))
         Noty(WARNNING, message)
         break
      case ERROR:
         dispatch(findBeneficiarioSuccess(message))
         Noty(ERROR, message)
         break
      default:
   }
}

export const findParentesco = (payload) => async (dispatch) => {
   dispatch(findParentescoLoading())
   const { data: { levelLog, data, message } } = await api(`/findFamilyById/${payload}`)
   switch (levelLog) {
      case SUCCESS:
         dispatch(findParentescoSuccess(data))
         break
      case WARNNING:
         dispatch(findParentescoError(message))
         break
      case ERROR:
         dispatch(findParentescoError(message))
         break
      default:
   }
}

export const findAdicional = (payload) => async (dispatch) => {
   dispatch(findAdicionalLoading())
   const { data: { levelLog, data, message } } = await api(`/findAdditionalById/${payload}`)
   switch (levelLog) {
      case SUCCESS:
         dispatch(findAdicionalSuccess(data))
         break
      case WARNNING:
         dispatch(findAdicionalError(message))
         break
      case ERROR:
         dispatch(findAdicionalError(message))
         break
      default:
   }
}

export const findDireccion = (payload) => async (dispatch) => {
   dispatch(findDireccionLoading())
   const { data: { levelLog, data, message } } = await api(`/findAddressById/${payload}`)
   switch (levelLog) {
      case SUCCESS:
         dispatch(findDireccionSuccess(data))
         break
      case WARNNING:
         dispatch(findDireccionError(message))
         break
      case ERROR:
         dispatch(findDireccionError(message))
         break
      default:
   }
}

export const findContacto = (payload) => async (dispatch) => {
   dispatch(findContactoLoading())
   const { data: { levelLog, data, message } } = await api(`/findContactById/${payload}`)
   switch (levelLog) {
      case SUCCESS:
         dispatch(findContactoSuccess(data))
         break
      case WARNNING:
         dispatch(findContactoError(message))
         break
      case ERROR:
         dispatch(findContactoError(message))
         break
      default:
   }
}
