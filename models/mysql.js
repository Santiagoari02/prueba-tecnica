import mysql from "mysql2/promise";

const DEFAULT_CONFIG = {
  host: "localhost",
  user: "root",
  port: 3306,
  password: "",
  database: "pruebadb",
};

const connectionString = process.env.DATABASE_URL ?? DEFAULT_CONFIG;

const connection = await mysql.createConnection(connectionString);

export class MysqlModel {
  static async getAllUsers() {
    const [users] = await connection.query("SELECT u.documento, u.nombre, u.primer_apellido, u.segundo_apellido, u.direccion, u.telefono, u.correo, u.ciudad, u.valor_cupo, u.estado, u.fecha, c.nombre AS condicion_pago,  m.nombre AS medio_pago FROM user u LEFT JOIN condicion_pago c ON u.condicion_pago = c.id LEFT JOIN medio_pago m ON u.medio_pago = m.id")

    return users
  }

  static async createUser({ input }) {
    try {
      const [result] = await connection.query(
        `INSERT INTO user 
        (documento, nombre, primer_apellido, segundo_apellido, direccion, telefono, correo, ciudad, condicion_pago, valor_cupo, medio_pago, estado, fecha)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
        [
          input.documento,
          input.nombre,
          input.primer_apellido,
          input.segundo_apellido,
          input.direccion,
          input.telefono,
          input.correo,
          input.ciudad,
          input.condicion_pago,
          input.valor_cupo,
          input.medio_pago,
          input.estado,
          input.fecha
        ]
      );
      return result;
    } catch (e) {
      console.error('Error en la creación del usuario:', e)
      throw new Error(`Error creando usuario: ${e.message}`)
    }
  }

  static async updateUser({ documento, input }) {
    try {
      const query = `
        UPDATE user 
        SET nombre = ?, 
            primer_apellido = ?, 
            segundo_apellido = ?, 
            direccion = ?, 
            telefono = ?, 
            correo = ?, 
            ciudad = ?, 
            condicion_pago = ?, 
            valor_cupo = ?, 
            medio_pago = ?, 
            estado = ?, 
            fecha = ?
        WHERE documento = ?;
      `;

      const values = [
        input.nombre,
        input.primer_apellido,
        input.segundo_apellido,
        input.direccion,
        input.telefono,
        input.correo,
        input.ciudad,
        input.condicion_pago,
        input.valor_cupo,
        input.medio_pago,
        input.estado,
        input.fecha,
        documento
      ];

      const [result] = await connection.query(query, values);
      return result;
    } catch (e) {
      console.error('Error al actualizar el usuario:', e);
      throw new Error(`Error actualizando usuario: ${e.message}`);
    }
  }
}