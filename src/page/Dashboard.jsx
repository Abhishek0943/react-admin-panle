import React from 'react'
import { BiCalendarAlt } from 'react-icons/bi'
import { FaFilter } from 'react-icons/fa6'
import { FcAreaChart, FcBarChart, FcComboChart, FcDoughnutChart, FcLineChart, FcPieChart } from 'react-icons/fc'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
const data = [
    { label: "January", data1: 10, data2: 5, data3: 15 },
    { label: "February", data1: 15, data2: 8, data3: 12 },
    { label: "March", data1: 12, data2: 10, data3: 10 },
    { label: "April", data1: 8, data2: 12, data3: 8 },
    { label: "May", data1: 14, data2: 16, data3: 5 },
    { label: "June", data1: 18, data2: 20, data3: 2 },
    { label: "July", data1: 20, data2: 22, data3: 5 },
    { label: "August", data1: 22, data2: 24, data3: 10 },
    { label: "September", data1: 26, data2: 18, data3: 15 },
    { label: "October", data1: 30, data2: 15, data3: 18 },
    { label: "November", data1: 28, data2: 12, data3: 20 },
    { label: "December", data1: 25, data2: 10, data3: 22 },
]
function Dashboard() {
    return (
        <div style={{ flex: "1" }}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "20px", alignItems: "center", }}>
                <p style={{ fontSize: "1.5rem" }}>Home</p>
                <div style={{ display: "flex", gap: "20px" }}>
                    <button style={{ display: "flex", alignItems: "center", border: "none", outline: "none", background: "var(--white)", padding: "10px 20px", borderRadius: "5px", boxShadow: "0px 0px 5px rgba(0, 0, 0, .5)", gap: "10px", fontWeight: "500" }}><BiCalendarAlt size={25} />Monthly</button>
                    <button style={{ display: "flex", alignItems: "center", border: "none", outline: "none", background: "var(--white)", padding: "10px 20px", borderRadius: "5px", boxShadow: "0px 0px 5px rgba(0, 0, 0, .5)", gap: "10px", fontWeight: "500" }}><FaFilter size={25} />Select Date</button>
                </div>
            </div>
            <div style={{ background: "white", margin: "20px", padding: "30px 20px", marginTop: "0px", display: "grid", gridGap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(32%, 1fr))", justifyContent: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", backgroundColor: "#ccccff", padding: "6px 15px", borderRadius: "6px" }}>
                    <FcAreaChart size={50} />
                    <div>
                        <p style={{ fontSize: ".9rem" }}>Users</p>
                        <p style={{ fontSize: "1.2rem", fontWeight: "600", textTransform: "uppercase" }}>2734824+</p>
                    </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", backgroundColor: "#ffccfa", padding: "6px 15px", borderRadius: "6px" }}>
                    <FcComboChart size={50} />
                    <div>
                        <p style={{ fontSize: ".9rem" }}>Users</p>
                        <p style={{ fontSize: "1.2rem", fontWeight: "600", textTransform: "uppercase" }}>2734824+</p>
                    </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", backgroundColor: "#ffccd7", padding: "6px 15px", borderRadius: "6px" }}>
                    <FcDoughnutChart size={50} />
                    <div>
                        <p style={{ fontSize: ".9rem" }}>Users</p>
                        <p style={{ fontSize: "1.2rem", fontWeight: "600", textTransform: "uppercase" }}>2734824+</p>
                    </div>
                </div> <div style={{ display: "flex", alignItems: "center", gap: "10px", backgroundColor: "#ccffdd", padding: "6px 15px", borderRadius: "6px" }}>
                    <FcLineChart size={50} />
                    <div>
                        <p style={{ fontSize: ".9rem" }}>Users</p>
                        <p style={{ fontSize: "1.2rem", fontWeight: "600", textTransform: "uppercase" }}>2734824+</p>
                    </div>
                </div> <div style={{ display: "flex", alignItems: "center", gap: "10px", backgroundColor: "#fff4cc", padding: "6px 15px", borderRadius: "6px" }}>
                    <FcPieChart size={50} />
                    <div>
                        <p style={{ fontSize: ".9rem" }}>Users</p>
                        <p style={{ fontSize: "1.2rem", fontWeight: "600", textTransform: "uppercase" }}>2734824+</p>
                    </div>
                </div> <div style={{ display: "flex", alignItems: "center", gap: "10px", backgroundColor: "#ffd8cc", padding: "6px 15px", borderRadius: "6px" }}>
                    <FcAreaChart size={50} />
                    <div>
                        <p style={{ fontSize: ".9rem" }}>Users</p>
                        <p style={{ fontSize: "1.2rem", fontWeight: "600", textTransform: "uppercase" }}>2734824+</p>
                    </div>
                </div>
            </div> <div style={{ margin: "20px", padding: "30px 20px", marginTop: "0px", display: "grid", gridGap: "20px", gridTemplateColumns: "2fr 1fr", justifyContent: "center" }}>
                {/* <div style={{ display: "flex", alignItems: "center", gap: "10px", backgroundColor: "#ccccff", padding: "6px 15px", borderRadius: "6px" }}>
            
                </div> */}
                <div style={{ background: "var(--white)", position: "relative", height: "550px", padding: "30px", borderRadius: "10px", boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.5)" }}>
                    <div style={{ fontWeight: "600", fontSize: "1.2rem", position: "relative", top: "10px", left: "15px" }}>User Report</div>
                    <ResponsiveContainer height={500} style={{ position: "absolute", left: "-20px", bottom: "0px" }}>
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="" />
                            <XAxis dataKey="label" />
                            <YAxis />
                            <Bar dataKey="data1" fill="#476bfa" />
                            <Tooltip />
                            <Legend verticalAlign="top" height={36} align='right' iconType="circle" />

                            <Bar dataKey="data1" fill="#0be7fb" />
                            <Bar dataKey="data3" fill="#fa916b" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* <div style={{ display: "flex", alignItems: "center", gap: "10px", backgroundColor: "#ffccfa", padding: "6px 15px", borderRadius: "6px" }}>
                    <FcComboChart size={50} />
                    <div>
                        <p style={{ fontSize: ".9rem" }}>Users</p>
                        <p style={{ fontSize: "1.2rem", fontWeight: "600", textTransform: "uppercase" }}>2734824+</p>
                    </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", backgroundColor: "#ffccd7", padding: "6px 15px", borderRadius: "6px" }}>
                    <FcDoughnutChart size={50} />
                    <div>
                        <p style={{ fontSize: ".9rem" }}>Users</p>
                        <p style={{ fontSize: "1.2rem", fontWeight: "600", textTransform: "uppercase" }}>2734824+</p>
                    </div>
                </div> <div style={{ display: "flex", alignItems: "center", gap: "10px", backgroundColor: "#ccffdd", padding: "6px 15px", borderRadius: "6px" }}>
                    <FcLineChart size={50} />
                    <div>
                        <p style={{ fontSize: ".9rem" }}>Users</p>
                        <p style={{ fontSize: "1.2rem", fontWeight: "600", textTransform: "uppercase" }}>2734824+</p>
                    </div>
                </div> <div style={{ display: "flex", alignItems: "center", gap: "10px", backgroundColor: "#fff4cc", padding: "6px 15px", borderRadius: "6px" }}>
                    <FcPieChart size={50} />
                    <div>
                        <p style={{ fontSize: ".9rem" }}>Users</p>
                        <p style={{ fontSize: "1.2rem", fontWeight: "600", textTransform: "uppercase" }}>2734824+</p>
                    </div>
                </div> <div style={{ display: "flex", alignItems: "center", gap: "10px", backgroundColor: "#ffd8cc", padding: "6px 15px", borderRadius: "6px" }}>
                    <FcAreaChart size={50} />
                    <div>
                        <p style={{ fontSize: ".9rem" }}>Users</p>
                        <p style={{ fontSize: "1.2rem", fontWeight: "600", textTransform: "uppercase" }}>2734824+</p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Dashboard
