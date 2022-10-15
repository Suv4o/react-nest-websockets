import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./App.css";

function App() {
    const [users, setUsers] = useState([]);

    const socket = io("http://localhost:3000");
    let socketOnMessage = null;

    useEffect(() => {
        if (!socketOnMessage) {
            socketOnMessage = socket.on("termsUpdates", (userIds) => {
                setUsers((ids) => {
                    return [...ids, ...userIds];
                });
            });
        }
    }, []);

    return (
        <div>
            {users.map((user) => {
                return (
                    <div key={Math.random()}>
                        <h2>id: {user}</h2>
                        <hr />
                    </div>
                );
            })}
        </div>
    );
}

export default App;
