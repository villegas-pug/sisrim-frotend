import {
   Table,
   Switch,
   Row,
   Col,
   Form,
   Input,
   Button
} from 'antd'
import { UserOutlined, SearchOutlined } from '@ant-design/icons'
import TabsCard from 'components/TabCard'
import useBeneficiario from 'hooks/useBeneficiario'

import './style.css'

const columns = [
   { title: '#CITA', dataIndex: 'idCitaVerifica', align: 'center' },
   { title: 'DOC', dataIndex: 'idDocBeneficiario', align: 'center' },
   { title: '#DOC', dataIndex: 'numDocBeneficiario', align: 'center' },
   { title: 'CIUDADANO', dataIndex: 'nombresBeneficiario', width: 220 },
   { title: 'FECNAC', dataIndex: 'fecNacBeneficiario', align: 'center' },
   { title: 'PAISNAC', dataIndex: 'paisNacimiento', align: 'center' },
   { title: 'ESTADO CIVIL', dataIndex: 'estadoCivil', align: 'center' },
   { title: 'TEL', dataIndex: 'telefono', align: 'center' },
   { title: 'PROF', dataIndex: 'profesion', width: 150, align: 'center' },
   { title: 'EMPRESA', dataIndex: 'centroTrabajo', width: 150, align: 'center' },
]

const data = [
   {
      idCitaVerifica: 1,
      idDocBeneficiario: 'CE',
      numDocBeneficiario: 123456,
      nombresBeneficiario: 'Cristopher',
      fecNacBeneficiario: '',
      paisNacimiento: 'VNZ',
      estadoCivil: 'S',
      telefono: 46392613,
      profesion: 'Ing. Sistemas',
      centroTrabajo: 'Migraciones-Peru'
   }
]

const rules = [
   { required: true, message: '¡Campo requerido!' },
   { type: 'string', message: '¡Ingresar solo texto!' },
   { min: 3, message: '¡Ingresar 3 caracteres como mínimo!' },
]

export default function MyTable() {

   /*» HOOK'S  */
   const { loadingBeneficiario, handleFindByIdCitaVerifica } = useBeneficiario()

   /*» HANDLER'S  */
   const handleOnExpanded = (expanded, record) => { expanded && handleFindByIdCitaVerifica(record) }

   return (
      <>
         <Row>
            <Col span={2}>
               <Switch title='' />
            </Col>
            <Col span={22}>
               <Form hidden={false}>
                  <Row>
                     <Col span={5}>
                        <Form.Item
                           name='nombre'
                           rules={rules}
                        >
                           <Input
                              placeholder='Nombre'
                              prefix={<UserOutlined />}
                           />
                        </Form.Item>
                     </Col>
                     <Col span={5} offset={1}>
                        <Form.Item
                           name='apePat'
                           rules={rules}
                        >
                           <Input
                              placeholder='Apellido paterno'
                              prefix={<UserOutlined />}
                           />
                        </Form.Item>
                     </Col>
                     <Col span={5} offset={1}>
                        <Form.Item
                           name='apeMat'
                           rules={rules}
                        >
                           <Input
                              placeholder='Apellido materno'
                              prefix={<UserOutlined />}
                           />
                        </Form.Item>
                     </Col>
                     <Col span={2} offset={1}>
                        <Button
                           type='ghost'
                           htmlType='submit'
                           icon={<SearchOutlined />}
                        >
                           Buscar
                        </Button>
                     </Col>
                  </Row>
               </Form>
            </Col>
         </Row>
         <Table
            loading={loadingBeneficiario}
            columns={columns}
            expandable={{
               onExpand: handleOnExpanded,
               expandedRowRender: record => (<TabsCard />),
               rowExpandable: record => !!record?.idCitaVerifica
            }}
            dataSource={data}
         />
      </>
   )
}

