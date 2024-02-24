import React, { useState } from 'react'
import Modal from '../../components/Modals';
import TabsLayout from '../tabs';

const Homepage = () => {
    const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex justify-center items-center">
    <button
      onClick={() => setShowModal(true)}
      className="rounded bg-blue-600 text-white py-2 px-2"
    >
      Task 1
    </button>
    {showModal && (
      <Modal showModal={showModal} setShowModal={setShowModal} size={"lg"}>
       <TabsLayout/>
      </Modal>
    )}
  </div>
  )
}

export default Homepage