import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import { Formik, Field, Form} from 'formik'
import { TextField, RadioGroup } from 'formik-material-ui'
import { MenuItem, Button } from '@material-ui/core'
import MuiTextField from '@material-ui/core/TextField'

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

const solutionType = [
  {
    value: 'policy',
    label: 'Policy',
  },
  {
    value: 'community program',
    label: 'Community Program',
  },
  {
    value: 'civic tech app',
    label: 'Civic Tech App',
  },
];

const level = [
  {
    value: 'city',
    label: 'City',
  },
  {
    value: 'country',
    label: 'Country',
  },
  {
    value: 'state',
    label: 'State',
  },
  {
    value: 'federal',
    label: 'Federal',
  },
];

function UserDetails() {
    return (
      <div className="UserDetails">
        <Container fixed>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              solutionName: '',
              challengeStatement: '',
              solution: '',
              solutionType: '',
              target: '',
              level: '',
            }}

            validate={values => {
              const errors: Partial<Values> = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              return errors;
            }}

            onSubmit={(values, {setSubmitting}) => {
              setTimeout(() => {
                setSubmitting(false);
                alert(JSON.stringify(values, null, 2));
              }, 500);
            }}

            render={({submitForm, isSubmitting, values, setFieldValue}) => (
              <Form>
                <Row style={{ height: 100}}>
                  <Col> 
                    <Field style={{ width: 250}}
                      name="firstName"
                      type="firstName"
                      label="First Name"
                      component={TextField}
                    />
                  </Col> 
                  <Col> 
                    <Field style={{ width: 250}}
                      name="lastName"
                      type="lastName"
                      label="Last Name"
                      component={TextField}
                    />
                  </Col>
                  <Col>  
                    <Field style={{ width: 250}}
                      name="email"
                      type="email"
                      label="Email Address"
                      component={TextField}
                    />
                  </Col> 
                </Row>
                <Row style={{ height: 100}}>
                  <Col md={12}>
                    <Field style={{ width: 500}}
                      name="solutionName"
                      type="solutionName"
                      label="Solution Name"
                      component={TextField}
                    />
                  </Col>
                </Row>
                <Row style={{ height: 100}}>
                  <Col md={12}>
                    <Field style={{ width: 500}}
                      name="challenge"
                      type="challenge"
                      label="Challenge Statement"
                      component={TextField}
                    />
                  </Col>
                </Row>
                <Row style={{ height: 100}}>
                  <Col md={12}>
                    <Field style={{ width: 500}}
                      name="solution"
                      type="solution"
                      label="Solution"
                      component={TextField}
                    />
                  </Col>
                </Row>
                <Row style={{ height: 100}}>
                  <Col md={4}>
                    <Field style={{ width: 250}}
                      type="text"
                      name="solutionType"
                      label="Solution Type"
                      select
                      helperText=""
                      margin="normal"
                      component={TextField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    >
                      {solutionType.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Field>
                  </Col>
                  <Col md={4}>
                    <Field style={{ width: 250}}
                      name="target"
                      type="target"
                      label="Describe Target Constiuency"
                      component={TextField}
                    />
                  </Col>
                  <Col md={4}>
                    <Field style={{ width: 250}}
                      type="text"
                      name="level"
                      label="Implementation Level"
                      select
                      helperText=""
                      margin="normal"
                      component={TextField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    >
                      {level.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Field>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      disabled={isSubmitting}
                      onClick={submitForm}
                    >
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Form>
            )}
          />
        </Container>
      </div>
    );
  }

export default UserDetails