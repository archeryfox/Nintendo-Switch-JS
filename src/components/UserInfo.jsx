import React from "react";

// Компонент для отображения информации о пользователе
function UserInfo({ user }) {
    return (
        <div className="bg-white flex justify-start flex-col items-center h-[20rem] w-fit shadow-lg rounded-lg mx-4">
            <h1 className="text-xl pb-2 pt-5 font-bold text-gray-900">Пользователь</h1>
            <div className="flex pt-5 pb-0 px-8">
                <div className="">
                    <img
                        src={user.image} 
                        alt={`${user.username}'s profile`}
                        className="h-[13rem] pr-5 rounded-full"
                    />
                </div>
                <div className="">
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
            </div>
        </div>
    );
}

export default UserInfo;
