import { Formik } from 'formik';
import React from 'react'
import { CreatProjectSchema } from '../../Schema/projectSchema';
import TabbedLayout from '../../components/TabbedLayout';
import FirstTab from './FirstTab';
import SecondTab from './SecondTab';
import ThirdTab from './ThirdTab';
import FourthTab from './FourthTab';

const TabsLayout = ({setShowModal}) => {
  return (
    <div>
         <Formik
            enableReinitialize
            validationSchema={CreatProjectSchema}
            initialValues={{
              projectName: "",
              clientId: "",
              startFrom: new Date(),
              endsOn: "",
              notes: "",
              rateId: "",
              price: "",
              budgetId: "",
              bugetReset: false,
              sendEmail: false,
              percentage: "",
              test: "list",
              permission: "admin",
            }}
            onSubmit={async (values) => {
              localStorage.setItem("project-json", JSON.stringify(values));
              setShowModal(false);
            }}
          >
            {(props) => {
              const {
                values,
                errors,
                handleChange,
                setFieldValue,
                handleSubmit,
              } = props;
              // console.log({ values, errors });
              return (
                <TabbedLayout
                //   items={items}
                  tabView={false}
                  handleSubmit={handleSubmit}
                >
                  <FirstTab
                    values={values}
                    handleChange={handleChange}
                    setFieldValue={setFieldValue}
                    errors={errors}
                  />
                  <SecondTab
                    values={values}
                    handleChange={handleChange}
                    setFieldValue={setFieldValue}
                    errors={errors}
                  />
                  <ThirdTab
                    values={values}
                    handleChange={handleChange}
                    setFieldValue={setFieldValue}
                    errors={errors}
                  />
                  <FourthTab
                    values={values}
                    handleChange={handleChange}
                    setFieldValue={setFieldValue}
                    errors={errors}
                  />
                </TabbedLayout>
              );
            }}
          </Formik>
    </div>
  )
}

export default TabsLayout