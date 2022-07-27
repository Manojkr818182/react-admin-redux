import React from 'react'
import { Tab, Tabs } from 'react-bootstrap';

const TabComponent = () => {
  return (
    <Tabs
      defaultActiveKey="users"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="users" title="Users">
        <h3>mnj</h3>
      </Tab>
      <Tab eventKey="block" title="Block">
        <h3>ee</h3>
      </Tab>
    </Tabs>
  )
}

export default TabComponent;