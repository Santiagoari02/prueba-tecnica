import { Form, Row } from 'react-bootstrap';

export const ListUsers = ({ listUsers, handleSwitchChange, handleEditUser }) => {
    const getListUsers = () => {
        if (listUsers.length !== 0) {
            return (
                <div className='container'>
                    {listUsers.map((user) => (
                        <div className="user-card" key={user.documento} onClick={() => handleEditUser(user)}>
                            <ul>
                                <li>CC: {user.documento}</li>
                                <li>Nombre Completo: {user.nombre + ' ' + user.primer_apellido + ' ' + user.segundo_apellido}</li>
                                <li>Dirección: {user.direccion}</li>
                                <li>Teléfono: {user.telefono}</li>
                                <li>Correo: {user.correo}</li>
                                <li>Ciudad: {user.ciudad}</li>
                                <li>Condición de pago: {user.condicion_pago}</li>
                                <li>Valor cupo: {user.valor_cupo}</li>
                                <li>Medio de pago: {user.medio_pago}</li>
                                <div className='switch'>
                                    <li>Estado: </li>
                                    <Form.Check
                                        type="switch"
                                        id={`switch-${user.documento}`}
                                        checked={user.isChecked}
                                        onChange={() => handleSwitchChange(user.documento)}
                                    />
                                </div>
                                <li>Fecha: {user.fecha?.slice(0, 10)}</li>
                            </ul>
                        </div>
                    ))}
                </div>
            );
        }
        return <p>No users found</p>;
    };

    return <div>{getListUsers()}</div>;
};
