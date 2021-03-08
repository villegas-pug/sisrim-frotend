import React, { useEffect } from 'react'
import styled from 'styled-components'
import {
   Form,
   Input,
   Row,
   Col,
   Button,
   Radio,
   Typography,
   Divider
} from 'antd'

import { ArrowRightOutlined, ClearOutlined } from '@ant-design/icons'
import HeadShake from 'react-reveal/HeadShake'

const { Title } = Typography

const Container = styled.div`
display:flex;
   height: 100%;
   justify-content: center;
   padding: .1rem;
`

const optAreas = [
   { label: 'Llegadas Internacionales – PCM AIJCH', value: 'Llegadas Internacionales – PCM AIJCH' },
   { label: 'Área de Tránsito del AIJCH', value: 'Área de Tránsito del AIJCH' },
   { label: 'Salidas Internacionales – PCM AIJCH', value: 'Salidas Internacionales – PCM AIJCH' },
   { label: 'Otros', value: 'Otros' },
]


export default function StepFirstRegistrar() {

   /*» HOOK'S  */
   /* const { values = {}, handleInputOnChange, handleNextStep } = {} */

   /*» EFFECT'S  */
   useEffect(() => {
   }, [])

   /*» HANDLER'S  */
   /* const handleOnSubmit = values => { handleNextStep() } */

   return (
      <HeadShake>
         <Container>
            <Form
               style={{ width: 400 }}
               labelCol={{ span: 6 }}
               wrapperCol={{ span: 18 }}
            /* onValuesChange={handleInputOnChange}
            onFinish={handleOnSubmit} */
            >
               <Title level={3}>» REGISTRO DE DATOS PERFILAMIENTO</Title>
               <Divider style={{ marginTop: 0 }} />
               <Form.Item
                  label='OPERADOR SALA'
                  name='operadorSalaAlertas'
                  rules={[{ required: true, message: '¡Campo requerido!' }]}
               /* initialValue={values.operadorSalaAlertas} */
               >
                  <Input name='operadorSalaAlertas' autoFocus />
               </Form.Item>
               <Form.Item
                  label='PASAJERO'
                  name='pasajero'
                  rules={[{ required: true, message: '¡Campo requerido!' }]}
               /* initialValue={values.pasajero} */
               >
                  <Input name='pasajero' />
               </Form.Item>
               <Form.Item
                  label='NACIONALIDAD'
                  name='nacionalidad'
                  /* initialValue={values.nacionalidad} */
                  rules={[{ required: true, message: '¡Campo requerido!' }]}
               >
                  <Input name='nacionalidad' />
               </Form.Item>
               <Form.Item
                  label='AREA'
                  name='area'
                  /* initialValue={values.area} */
                  rules={[{ required: true, message: '¡Campo requerido!' }]}
               >
                  <Radio.Group
                     style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}
                     options={optAreas}
                  />
               </Form.Item>
               <Row>
                  <Col span={6} offset={6}>
                     <Button
                        htmlType='reset'
                        type='ghost'
                        icon={<ClearOutlined />}
                     >
                        LIMPIAR
                  </Button>
                  </Col>
                  <Col span={6} offset={6}>
                     <Button
                        htmlType='submit'
                        type='primary'
                        icon={<ArrowRightOutlined />}
                     >
                        SIGUIENTE
                  </Button>
                  </Col>
               </Row>
            </Form>
         </Container>
      </HeadShake>
   )
}