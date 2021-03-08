import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'
import { UserSwitchOutlined } from '@ant-design/icons'

const { Meta } = Card

const styles = {
   card: {
      width: 220,
      marginTop: 1,
   },
   icon: {
      fontSize: 20
   },
}

export default function MyCard({ title, description, loading = false }) {

   return (
      <>
         <Card style={styles.card} loading={loading}>
            <Meta
               avatar={
                  <UserSwitchOutlined style={styles.icon} />
               }
               title={title}
               description={description}
            />
         </Card>

      </>
   )
}

MyCard.propTypes = {
   title: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired
}