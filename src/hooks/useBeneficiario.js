import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
   findBeneficiario,
   findParentesco,
   findAdicional,
   findDireccion,
   findContacto
} from 'store/actions/beneficiarioAction'

export default function useBeneficiario() {

   /*» STORE HOOK'S  */
   const dispatch = useDispatch()
   const { beneficiario: {
      beneficiario: { loading: loadingBeneficiario, data: beneficiarioDb },
      parentesco: { loading: loadingParentesco, data: parentescoDb },
      adicional: { loading: loadingAdicional, data: adicionalDb },
      direccion: { loading: loadingDireccion, data: direccionDb },
      contacto: { loading: loadingContacto, data: contactoDb },
   } } = useSelector(store => store)


   /*» HOOK'S  */
   const [idToLook, setIdToLook] = useState()

   /*» EFFECT'S  */
   useEffect(() => {/*» Buscar parentescos...  */
      dispatch(findParentesco(idToLook))
   }, [idToLook])

   useEffect(() => {/*» Buscar datos adicionales...  */
      dispatch(findAdicional(idToLook))
   }, [idToLook])

   useEffect(() => {/*» Buscar datos dirección...  */
      dispatch(findDireccion(idToLook))
   }, [idToLook])

   useEffect(() => {/*» Buscar a contacto...  */
      dispatch(findContacto(idToLook))
   }, [idToLook])

   /*» HANDLER'S  */
   const handleFindBeneficiarioByFirstAndLastName = (payload) => {
      dispatch(findBeneficiario(payload))
   }

   const handleFindByIdCitaVerifica = ({ idCitaVerifica }) => {
      setIdToLook(idCitaVerifica)
   }

   return {
      loadingBeneficiario,
      loadingParentesco,
      loadingAdicional,
      loadingDireccion,
      loadingContacto,

      beneficiarioDb,
      parentescoDb,
      adicionalDb,
      direccionDb,
      contactoDb,

      handleFindBeneficiarioByFirstAndLastName,
      handleFindByIdCitaVerifica
   }
}