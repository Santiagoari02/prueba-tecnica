import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Formik } from 'formik';

export const EditarClienteModal = ({ showModalEdit, handleCloseModalEdit, userToEdit }) => {

    const handleFormSubmit = async (values) => {
        try {
            const response = await fetch(`http://localhost:3000/api/${userToEdit ? userToEdit.documento : ''}`, {
                method: userToEdit ? 'PUT' : 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (!response.ok) throw new Error('Error en la actualización del cliente');
            console.log('Cliente actualizado exitosamente');
            handleCloseModalEdit();
        } catch (error) {
            console.error('Error al actualizar cliente:', error);
        }
    };

    return (
        <Modal show={showModalEdit} onHide={handleCloseModalEdit}>
            <Modal.Header closeButton>
                <Modal.Title>Editar Cliente</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik
                    initialValues={{
                        documento: userToEdit?.documento || '',
                        nombre: userToEdit?.nombre || '',
                        primer_apellido: userToEdit?.primer_apellido || '',
                        segundo_apellido: userToEdit?.segundo_apellido || '',
                        direccion: userToEdit?.direccion || '',
                        telefono: userToEdit?.telefono || '',
                        correo: userToEdit?.correo || '',
                        ciudad: userToEdit?.ciudad || '',
                        valor_cupo: userToEdit?.valor_cupo || '',
                    }}
                    onSubmit={handleFormSubmit}
                >
                    {({ handleSubmit, handleChange, values, touched, errors }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="7" controlId="validationFormik02">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control
                                        name="nombre"
                                        value={values.nombre}
                                        onChange={handleChange}
                                        isInvalid={touched.nombre && !!errors.nombre}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Por favor ingrese un nombre válido.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="5" controlId="validationFormikUsername">
                                    <Form.Label>Primer Apellido</Form.Label>
                                    <InputGroup hasValidation>
                                        <Form.Control
                                            name="primer_apellido"
                                            value={values.primer_apellido}
                                            onChange={handleChange}
                                            isInvalid={touched.primer_apellido && !!errors.primer_apellido}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor ingrese un primer apellido válido.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="4" controlId="validationFormik03">
                                    <Form.Label>Segundo Apellido</Form.Label>
                                    <Form.Control
                                        name="segundo_apellido"
                                        value={values.segundo_apellido}
                                        onChange={handleChange}
                                        isInvalid={touched.segundo_apellido && !!errors.segundo_apellido}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Por favor ingrese un segundo apellido válido.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationFormik04">
                                    <Form.Label>Dirección</Form.Label>
                                    <Form.Control
                                        name="direccion"
                                        value={values.direccion}
                                        onChange={handleChange}
                                        isInvalid={touched.direccion && !!errors.direccion}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Por favor ingrese una dirección válida.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationFormik05">
                                    <Form.Label>Teléfono</Form.Label>
                                    <Form.Control
                                        name="telefono"
                                        value={values.telefono}
                                        onChange={handleChange}
                                        isInvalid={touched.telefono && !!errors.telefono}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Por favor ingrese un número de teléfono válido.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="5" controlId="validationFormik06">
                                    <Form.Label>Correo</Form.Label>
                                    <Form.Control
                                        name="correo"
                                        type="email"
                                        value={values.correo}
                                        onChange={handleChange}
                                        isInvalid={touched.correo && !!errors.correo}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Por favor ingrese un correo válido.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationFormik07">
                                    <Form.Label>Ciudad</Form.Label>
                                    <Form.Select
                                        name="ciudad"
                                        value={values.ciudad}
                                        onChange={handleChange}
                                        isInvalid={touched.ciudad && !!errors.ciudad}
                                    >
                                        <option value="">Seleccione una ciudad</option>
                                        <option value="1">Bucaramanga</option>
                                        <option value="2">Piedecuesta</option>
                                        <option value="3">Girón</option>
                                        <option value="4">Florida</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        Por favor seleccione una ciudad.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationFormik08">
                                    <Form.Label>Valor cupo</Form.Label>
                                    <Form.Control
                                        name="valor_cupo"
                                        value={values.valor_cupo}
                                        onChange={handleChange}
                                        isInvalid={touched.valor_cupo && !!errors.valor_cupo}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Por favor ingrese un valor válido.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Button type="submit">Guardar</Button>
                        </Form>
                    )}
                </Formik>
            </Modal.Body>
        </Modal>
    );
};
