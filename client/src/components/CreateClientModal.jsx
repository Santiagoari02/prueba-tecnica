import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Formik } from 'formik';

export const CrearClienteModal = ({ showModalCreate, handleCloseModalCreate }) => {
    const handleCreateClient = async (values) => {
        try {
            const response = await fetch("http://localhost:3000/api/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                const newClient = await response.json();
                console.log("Nuevo cliente creado:", newClient);
                handleCloseModalCreate();
            } else {
                console.error("Error al crear el cliente");
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
        }
    };

    return (
        <Modal show={showModalCreate} onHide={handleCloseModalCreate}>
            <Modal.Header closeButton>
                <Modal.Title>Crear cliente</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik
                    initialValues={{
                        documento: '',
                        nombre: '',
                        primer_apellido: '',
                        segundo_apellido: '',
                        direccion: '',
                        telefono: '',
                        correo: '',
                        ciudad: '',
                        condicion_pago: '',
                        valor_cupo: '',
                        medio_pago: '',
                        estado: true,
                    }}
                    onSubmit={(values) => {
                        handleCreateClient(values);
                    }}
                >
                    {({ handleSubmit, handleChange, values, touched, errors }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="3" controlId="validationFormik01">
                                    <Form.Label>CC</Form.Label>
                                    <Form.Control
                                        name="documento"
                                        value={values.documento}
                                        onChange={handleChange}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">Por favor ingrese un CC válido.</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="5" controlId="validationFormik02">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control
                                        name="nombre"
                                        value={values.nombre}
                                        onChange={handleChange}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">Por favor ingrese un nombre válido.</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                                    <Form.Label>Primer Apellido</Form.Label>
                                    <InputGroup hasValidation>
                                        <Form.Control
                                            name="primer_apellido"
                                            value={values.primer_apellido}
                                            onChange={handleChange}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">Por favor ingrese un primer apellido válido.</Form.Control.Feedback>
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
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationFormik04">
                                    <Form.Label>Dirección</Form.Label>
                                    <Form.Control
                                        name="direccion"
                                        value={values.direccion}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationFormik05">
                                    <Form.Label>Teléfono</Form.Label>
                                    <Form.Control
                                        name="telefono"
                                        value={values.telefono}
                                        onChange={handleChange}
                                        required
                                    />
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
                                        required
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationFormik07">
                                    <Form.Label>Ciudad</Form.Label>
                                    <Form.Select
                                        name="ciudad"
                                        value={values.ciudad}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Seleccione una ciudad</option>
                                        <option value="1">Bucaramanga</option>
                                        <option value="2">Piedecuesta</option>
                                        <option value="3">Girón</option>
                                        <option value="4">Florida</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationFormik08">
                                    <Form.Label>Con. de pago</Form.Label>
                                    <Form.Control
                                        name="condicion_pago"
                                        value={values.condicion_pago}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="4" controlId="validationFormik09">
                                    <Form.Label>Valor cupo</Form.Label>
                                    <Form.Control
                                        name="valor_cupo"
                                        value={values.valor_cupo}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="5" controlId="validationFormik10">
                                    <Form.Label>Medio Pago</Form.Label>
                                    <Form.Control
                                        name="medio_pago"
                                        value={values.medio_pago}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationFormik11">
                                    <Form.Label>Estado</Form.Label>
                                    <Form.Control
                                        name="estado"
                                        type="checkbox"
                                        checked={values.estado}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Row>
                            <Button type="submit">Crear</Button>
                        </Form>
                    )}
                </Formik>
            </Modal.Body>
        </Modal>
    );
};
