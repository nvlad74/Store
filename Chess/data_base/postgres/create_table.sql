-- Таблица: Игроки
CREATE TABLE if not exists "Players" (
    user_id SERIAL PRIMARY KEY,
	
    user_name VARCHAR(20) UNIQUE NOT NULL,
    user_login VARCHAR(20) UNIQUE NOT NULL,
    hash_password TEXT NOT NULL,
	
    created_at TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP
);

-- Таблица: Партии
CREATE TABLE if not exists "Games" (
    game_id SERIAL PRIMARY KEY,
    player_white INT NOT NULL REFERENCES "Players"(user_id),
    player_black INT NOT NULL REFERENCES "Players"(user_id),
	
    start_time TIMESTAMP(0) DEFAULT CURRENT_TIMESTAMP,
    end_time TIMESTAMP(0),
    result_game VARCHAR(10)
);

-- Таблица: Ходы в SAN нотации
CREATE TABLE if not exists "Moves" (
    move_id SERIAL PRIMARY KEY,
    game_id INT NOT NULL REFERENCES "Games"(game_id),
	
    move_number INT NOT NULL,
    move_notation VARCHAR(10) NOT NULL
);
