import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';



const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, [])

    // Get Users
    const getUsers = async () => {
        const response = await axios.get('https://project-akhir-api.vercel.app/users')
        setUsers(response.data)
    }

    // Delete User
    const deleteUser = async (id) => {
        try {
            await axios.delete(`https://project-akhir-api.vercel.app/users/${id}`)
            getUsers();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='columns'>
            <div className="column is-half">
                <Link
                    to={'/add'}
                    className='button is-success'
                >
                    Add New
                </Link>
                <table className='table is-striped is-fullwidth mt-5'>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                                <td>
                                    <Link
                                        to={`/edit/${user._id}`}
                                        className='button is-info is-small'
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => deleteUser(user._id)}
                                        className='button is-danger is-small'
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default UserList