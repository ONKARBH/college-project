import React from 'react'
import { Link } from 'react-router-dom'
import computerImage from '../assets/images/departments/computer.png'
import electronicsImage from '../assets/images/departments/electronics.png'
import mechanicalImage from '../assets/images/departments/mechanical.png'
import civilImage from '../assets/images/departments/civil.png'
import '../styles/department.scss'

export default function DepartmentSection() {
    const departments = [
   
        {
            id: 'civil',
            name: 'Civil Engineering',
            image: civilImage,
            path: '/departments/civil'
        },
             {
            id: 'computer',
            name: 'Computer Sci. Engineering',
            image: computerImage,
            path: '/departments/computer'
        },
        {
            id: 'electronics',
            name: 'E & TC Engineering',
            image: electronicsImage,
            path: '/departments/electronics'
        },
        {
            id: 'mechanical',
            name: 'Mechanical Engineering',
            image: mechanicalImage,
            path: '/departments/mechanical'
        },
    ]

    return (
        <div className='department-container'>
            <div className='departments-grid'>
                {departments.map((dept) => (
                    <Link to={dept.path} key={dept.id} className='department-card'>
                        <img src={dept.image} alt={dept.name} className='department-bg-image' />
                        <div className='department-overlay'>
                            <div className='department-info'>
                                <h3>{dept.name}</h3>
                            </div>
                            <div className='department-arrow'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

