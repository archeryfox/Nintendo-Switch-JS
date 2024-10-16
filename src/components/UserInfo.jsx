import React from "react";

// Компонент для отображения информации о пользователе
function UserInfo({ user }) {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <img
                src={user.image}
                alt={`${user.username}'s profile`}
                className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h1 className="text-xl font-bold text-gray-900 mb-2">Пользователь</h1>
            <div className="grid grid-cols-2 gap-4">
                <p className="py-2 text-gray-600 font-semibold">Имя:</p>
                <span className="border border-indigo-400 rounded-lg px-2 py-1">{user.username}</span>

                <p className="py-2 text-gray-600 font-semibold">Уровень:</p>
                <span
                    className={`rounded-lg px-2 py-1 
                        ${user.level < 10 ? 'border-green-400' :
                        user.level < 20 ? 'border-blue-700' :
                            'border-red-600'} border`}
                >
                    {user.level}
                </span>

                <p className="py-2 text-gray-600 font-semibold">Игры, сыгранные:</p>
                <span className="border border-indigo-400 rounded-lg px-2 py-1">{user.gamesPlayed}</span>

                <p className="py-2 text-gray-600 font-semibold">Друзья:</p>
                <span className="border border-indigo-400 rounded-lg px-2 py-1">
                    {user.friends.join(", ")}
                </span>
            </div>
        </div>
    );
}

export default UserInfo;
