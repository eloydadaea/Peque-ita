
const valentineGifts = [
    {
    day: 1,
    title: "Rompecabezas del Corazón",
    icon: "fa-puzzle-piece",
    content: `
        <div class="gift-container">
            <h3 style="color: #d81b60; margin-bottom: 15px;">🧩 Rompecabezas del Amor</h3>
            <p>Sube una foto especial y resuelve el rompecabezas para descubrir un mensaje secreto corazoncito</p>
            
            <div class="puzzle-container-simple">
                <!-- Controles -->
                <div class="puzzle-controls">
                    <label for="puzzle-upload" class="puzzle-upload-btn">
                        <i class="fas fa-cloud-upload-alt"></i> Subir Foto
                    </label>
                    <input type="file" id="puzzle-upload" accept="image/*" style="display: none;">
                    
                    <button id="shuffle-puzzle" class="puzzle-shuffle-btn" disabled>
                        <i class="fas fa-random"></i> Mezclar Piezas
                    </button>
                    
                    <button id="solve-puzzle" class="puzzle-solve-btn" disabled>
                        <i class="fas fa-lightbulb"></i> Ver Solución
                    </button>
                </div>
                
                <!-- Área del rompecabezas -->
                <div class="puzzle-area">
                    <div id="puzzle-original" class="puzzle-original" style="display: none;">
                        <p style="color: #ad1457; font-weight: bold; margin-bottom: 10px;">Imagen original:</p>
                        <div id="original-image-container" style="width: 200px; height: 200px; margin: 0 auto; border: 2px solid #f50057; border-radius: 10px; overflow: hidden;">
                            <!-- Imagen original se mostrará aquí -->
                        </div>
                    </div>
                    
                    <div id="puzzle-board" class="puzzle-board">
                        <p style="color: #ad1457; font-weight: bold; margin-bottom: 10px;">Arrastra las piezas para armar el rompecabezas:</p>
                        <div id="puzzle-pieces-container" class="puzzle-pieces-container">
                            <!-- Las piezas del rompecabezas se generarán aquí -->
                            <div class="puzzle-placeholder">
                                <i class="fas fa-heart" style="font-size: 3rem; color: #f8bbd0; margin-bottom: 10px;"></i>
                                <p style="color: #880e4f;">Sube una foto para comenzar el rompecabezas</p>
                            </div>
                        </div>
                        
                        <div id="puzzle-grid" class="puzzle-grid" style="display: none;">
                            <!-- La cuadrícula donde se arma el rompecabezas -->
                        </div>
                    </div>
                </div>
                
                <!-- Mensaje secreto -->
                <div id="puzzle-message-container" class="puzzle-message-container" style="display: none;">
                    <div class="secret-message">
                        <h4 style="color: #f50057; margin-bottom: 10px;">🎉 ¡Felicidades amorchito! 🎉</h4>
                        <p id="puzzle-message" style="font-size: 1.2rem; font-weight: bold; color: #d81b60;">
                            Has completado el rompecabezas del amor preciosa
                        </p>
                        <p style="margin-top: 10px; color: #880e4f;">
                            ❤ Este mensaje es solo para ti pequeñita ❤
                        </p>
                    </div>
                </div>
                
                <!-- Estadísticas -->
                <div class="puzzle-stats" style="margin-top: 20px; display: none;" id="puzzle-stats">
                    <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
                        <div class="stat-box">
                            <div class="stat-value" id="puzzle-time">0</div>
                            <div class="stat-label">Segundos</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-value" id="puzzle-moves">0</div>
                            <div class="stat-label">Movimientos</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-value" id="puzzle-pieces">0/9</div>
                            <div class="stat-label">Piezas Correctas</div>
                        </div>
                    </div>
                </div>
                
                <!-- Instrucciones -->
                <div class="puzzle-instructions" style="margin-top: 20px; padding: 15px; background-color: #fce4ec; border-radius: 10px; border-left: 4px solid #f50057;">
                    <p><i class="fas fa-lightbulb"></i> <strong>Cómo jugar:</strong></p>
                    <ol style="text-align: left; margin: 10px 0; font-size: 0.9em;">
                        <li>Sube una foto especial (se convertirá en un rompecabezas 3x3)</li>
                        <li>Arrastra las piezas a la cuadrícula para armarlo</li>
                        <li>¡Completa el rompecabezas para descubrir el mensaje secreto!</  li>
                    </ol>
                </div>
            </div>
        </div>
    `,
    interactive: true
},
    {
        day: 2,
        title: "Vale por un Abrazo Reconfortante",
        icon: "fa-hands",
        content: `
            <div class="gift-container">
                <div class="coupon">
                    <div class="coupon-title">VALE POR UN ABRAZOTE</div>
                    <p>Este vale canjea un abrazo lleno de muchisimo amor y cariño.</p>
                    <p><strong>Válido:</strong> Para siempre</p>
                    <p><strong>Código:</strong> AMOR-2026-❤</p>
                    <p>Preséntalo cuando necesites sentir más mi cercanía.</p>
                    <p>Amorchito no olvides tomarle captura para canjearlo.</p>
                </div>
            </div>
        `
    },
    {
        day: 3,
        title: "Carta de Amor Personalizada",
        icon: "fa-envelope",
        content: `
            <div class="gift-container">
                <div class="love-letter">
                    <p>Princesita,</p>
                    <p>En este día especial, quiero recordarte lo mucho que significas para mí. Eres la razón por la que mi corazón late con fuerza cada mañana.</p>
                    <p>Tus sonrisas iluminan mis días más grises y tu amor me da fuerzas para ser mejor cada día.</p>
                    <p>Hoy y siempre, prometo amarte, respetarte y hacerte feliz, recuerda que somos el mejor equipo del mundo mundial amorchito.</p>
                    <p>Con todo mi amor,<br>Tu bebito chiquitito ❤</p>
                </div>
            </div>
        `
    },
     {
        day: 4,
        title: "Playlist del Amor",
        icon: "fa-music",
        content: `
            <div class="gift-container">
                <h3 style="color: #d81b60; margin-bottom: 15px;">🎵 Playlist del Amor</h3>
                <p>¡Escuchar estas canciones me recuerdan a ti preciosa!</p>
                
                <div class="music-player">
                    <div class="player-controls">
                        <button id="prev-btn" class="player-btn"><i class="fas fa-backward"></i></button>
                        <button id="play-btn" class="player-btn"><i class="fas fa-play"></i></button>
                        <button id="pause-btn" class="player-btn"><i class="fas fa-pause"></i></button>
                        <button id="next-btn" class="player-btn"><i class="fas fa-forward"></i></button>
                        <button id="stop-btn" class="player-btn"><i class="fas fa-stop"></i></button>
                    </div>
                    
                    <div class="player-info">
                        <div id="now-playing">Selecciona una canción</div>
                        <div class="volume-control">
                            <i class="fas fa-volume-down"></i>
                            <input type="range" id="volume-slider" min="0" max="1" step="0.1" value="0.5">
                            <i class="fas fa-volume-up"></i>
                        </div>
                    </div>
                    
                    <div class="playlist">
                        <div class="song" data-song="1">
                            <div class="song-info">
                                <div class="song-title">Perfect - Ed Sheeran</div>
                                <div class="song-duration">4:23</div>
                            </div>
                            <button class="play-song-btn"><i class="fas fa-play"></i></button>
                        </div>
                        <div class="song" data-song="2">
                            <div class="song-info">
                                <div class="song-title">Until I Found You - Stephen Sanchez, Em Beihold</div>
                                <div class="song-duration">2:55</div>
                            </div>
                            <button class="play-song-btn"><i class="fas fa-play"></i></button>
                        </div>
                        <div class="song" data-song="3">
                            <div class="song-info">
                                <div class="song-title">Química Mayor - Mon Laferte</div>
                                <div class="song-duration">3:45</div>
                            </div>
                            <button class="play-song-btn"><i class="fas fa-play"></i></button>
                        </div>
                        <div class="song" data-song="4">
                            <div class="song-info">
                                <div class="song-title">Compartir - Carla Morrison</div>
                                <div class="song-duration">4:23</div>
                            </div>
                            <button class="play-song-btn"><i class="fas fa-play"></i></button>
                        </div>
                        <div class="song" data-song="5">
                            <div class="song-info">
                                <div class="song-title">Alma Dinamita - Wos</div>
                                <div class="song-duration">2:53</div>
                            </div>
                            <button class="play-song-btn"><i class="fas fa-play"></i></button>
                        </div>
                        <div class="song" data-song="6">
                            <div class="song-info">
                                <div class="song-title">Amor - Emmanuell Cortess</div>
                                <div class="song-duration">3:16</div>
                            </div>
                            <button class="play-song-btn"><i class="fas fa-play"></i></button>
                        </div>
                        <div class="song" data-song="7">
                            <div class="song-info">
                                <div class="song-title">Favorito - Camilo</div>
                                <div class="song-duration">3:30</div>
                            </div>
                            <button class="play-song-btn"><i class="fas fa-play"></i></button>
                        </div>
                    </div>
                    
                    <div class="player-status">
                        <div class="progress-bar">
                            <div id="progress" class="progress"></div>
                        </div>
                        <div class="time-display">
                            <span id="current-time">0:00</span> / <span id="total-time">0:00</span>
                        </div>
                    </div>
                </div>
            </div>
        `,
        interactive: true
    },
    {
    day: 5,
    title: "Foto con Marco de Corazones",
    icon: "fa-image",
    content: `
        <div class="gift-container">
            <h3 style="color: #d81b60; margin-bottom: 15px;">📸 Foto con Marco de Corazones</h3>
            <p>Amorrchito, sube una foto especial y crea un marco de corazones personalizado</p>
            
            <div class="photo-upload-area">
                <div style="border: 3px dashed #f50057; padding: 20px; border-radius: 10px; margin: 15px 0; background-color: #fce4ec;">
                    <div id="photo-frame" style="width: 300px; height: 300px; margin: 0 auto; position: relative; background-color: #f8bbd0; display: flex; align-items: center; justify-content: center;">
                        <p style="color: #880e4f; font-style: italic;">Tu foto aparecerá aquí</p>
                    </div>
                </div>
                
                <div class="upload-controls">
                    <label for="photo-upload" class="upload-btn">
                        <i class="fas fa-cloud-upload-alt"></i> Seleccionar Foto
                    </label>
                    <input type="file" id="photo-upload" accept="image/*" style="display: none;">
                    
                    <button id="download-btn" class="download-btn" disabled>
                        <i class="fas fa-download"></i> Descargar Imagen
                    </button>
                </div>
                
                <div class="frame-options" style="margin-top: 20px;">
                    <p style="margin-bottom: 10px; font-weight: bold; color: #ad1457;">Estilos de marco:</p>
                    <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
                        <button class="frame-style-btn active" data-style="hearts">❤ Corazones</button>
                        <button class="frame-style-btn" data-style="simple">✨ Simple</button>
                        <button class="frame-style-btn" data-style="romantic">🌹 Romántico</button>
                    </div>
                </div>
                
                <div id="download-message" style="margin-top: 15px; color: #d81b60; font-weight: bold; display: none;">
                    ¡Imagen descargada con éxito! ❤
                </div>
            </div>
            
            <p style="margin-top: 15px; font-size: 0.9em; color: #666;">
                <i class="fas fa-lightbulb"></i> Consejo: Usa una foto especial de nosotros para crear un recuerdo único.
            </p>
        </div>
    `,
    interactive: true
},
    {
        day: 6,
        title: "Vale por una Cita en el Cine",
        icon: "fa-film",
        content: `
            <div class="gift-container">
                <div class="coupon">
                    <div class="coupon-title">VALE CINEFILO</div>
                    <p>Este vale canjea una tarde de película juntos pequeñita.</p>
                    <p><strong>Incluye:</strong></p>
                    <ul style="text-align: left; margin: 10px 0 10px 20px;">
                        <li>Elección de película</li>
                        <li>Coste de ticket y snacks incluidos</li>
                        <li>Conversación post-película</li>
                    </ul>
                    <p><strong>Código:</strong> CITA-AMOR-2026</p>
                    <p>Canjéalo cuando quieras pasar tiempo de calidad juntos.</p>
                    <p>Amorchito no olvides tomarle captura para canjearlo.</p>
                </div>
            </div>
        `
    },
    {
        day: 7,
        title: "Poema de Amor Generado",
        icon: "fa-feather",
        content: `
            <div class="gift-container">
                <p>Genera un poema de amor único con tu nombre y el de tu pareja</p>
                <div style="margin: 20px 0;">
                    <input type="text" id="name1" placeholder="Tu nombre" style="padding: 10px; margin: 5px; border: 2px solid #f50057; border-radius: 5px;">
                    <input type="text" id="name2" placeholder="Nombre de tu pareja" style="padding: 10px; margin: 5px; border: 2px solid #f50057; border-radius: 5px;">
                    <button id="generate-poem" style="margin: 10px;">Generar Poema</button>
                </div>
                <div id="poem-output" style="background-color: #fce4ec; padding: 20px; border-radius: 10px; margin-top: 15px; font-style: italic; min-height: 150px; display: flex; align-items: center; justify-content: center;">
                    <p>Tu poema aparecerá aquí...</p>
                </div>
            </div>
        `,
        interactive: true
    },
    {
        day: 8,
        title: "Árbol de los Deseos",
        icon: "fa-tree",
        content: `
            <div class="gift-container">
                <p>Escribe un deseo para nuestra relación y colócalo en el árbol princesita</p>
                <div style="margin: 20px 0; position: relative; height: 200px;">
                    <div style="position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 0; height: 0; border-left: 60px solid transparent; border-right: 60px solid transparent; border-bottom: 100px solid #8d6e63;"></div>
                    <div style="position: absolute; bottom: 100px; left: 50%; transform: translateX(-50%); width: 20px; height: 100px; background-color: #795548;"></div>
                    <div id="wish-branch" style="position: absolute; top: 50px; left: 50%; transform: translateX(-50%); text-align: center; width: 100%;">
                        <!-- Los deseos se agregarán aquí -->
                    </div>
                </div>
                <textarea id="wish-input" placeholder="Escribe tu deseo para nuestra relación princesita..." rows="3" style="width: 100%; padding: 10px; border: 2px solid #f50057; border-radius: 5px; margin-bottom: 10px;"></textarea>
                <button id="add-wish">Añadir deseo al árbol</button>
            </div>
        `,
        interactive: true
    },
    {
        day: 9,
        title: "Vale para Hacerce las Uñas",
        icon: "fa-spa",
        content: `
            <div class="gift-container">
                <div class="coupon">
                    <div class="coupon-title">VALE PARA HACERTE LAS UÑITAS</div>
                    <p>Este vale canjea una sesión para las uñitas.</p>
                    <p><strong>Incluye:</strong></p>
                    <ul style="text-align: left; margin: 10px 0 10px 20px;">
                        <li>Elección del diseño</li>
                        <li>Elección de la manicurista</li>
                        <li>Coste de las uñas y un snack</li>
                    </ul>
                    <p><strong>Código:</strong> UÑAS-AMOR-2026</p>
                    <p>Perfecto para lucir unas uñas preciosas.</p>
                    <p>Amorchito no olvides tomarle captura para canjearlo.</p>
                </div>
            </div>
        `
    },
    {
        day: 10,
        title: "Quiz del Amor",
        icon: "fa-question-circle",
        content: `
            <div class="gift-container">
                <p>¿Cuánto sabes de mi princesita? Responde este quiz</p>
                <div id="quiz-container" style="text-align: left; margin: 20px 0;">
                    <div class="quiz-question">
                        <p><strong>1. ¿Cuál es mi comida favorita amorchito?</strong></p>
                        <input type="radio" name="q1" value="a"> Chaufa<br>
                        <input type="radio" name="q2" value="b"> Sushi<br>
                        <input type="radio" name="q3" value="c"> Tallarines rojos<br>
                        <input type="radio" name="q4" value="d"> Pollo a la brasa<br>
                    </div>
                    <div class="quiz-question">
                        <p><strong>2. ¿Cuál es la película que más les gusta ver juntos?</strong></p>
                        <input type="radio" name="q5" value="a"> Romántica<br>
                        <input type="radio" name="q6" value="b"> Comedia<br>
                        <input type="radio" name="q7" value="c"> Terror<br>
                        <input type="radio" name="q8" value="d"> Acción<br>
                    </div>
                    <button id="submit-quiz" style="margin-top: 15px;">Ver resultados</button>
                    <div id="quiz-result" style="margin-top: 15px; font-weight: bold; color: #d81b60;"></div>
                </div>
            </div>
        `,
        interactive: true
    },
    {
    day: 11,
    title: "Collage de Recuerdos",
    icon: "fa-images",
    content: `
        <div class="gift-container">
            <h3 style="color: #d81b60; margin-bottom: 15px;">🖼️ Collage de Recuerdos pequeñita</h3>
            <p>Crea un collage con las fotitos que mas te gusten amorchito</p>
            
            <div class="simple-collage-container">
                <!-- Controles -->
                <div class="collage-controls-simple">
                    <label for="collage-upload-simple" class="upload-btn-simple">
                        <i class="fas fa-cloud-upload-alt"></i> Seleccionar Fotos (máx. 6)
                    </label>
                    <input type="file" id="collage-upload-simple" accept="image/*" multiple style="display: none;">
                    
                    <button id="download-collage-simple" class="download-btn-simple" disabled>
                        <i class="fas fa-download"></i> Descargar Collage
                    </button>
                </div>
                
                <!-- Área del collage -->
                <div class="collage-area">
                    <div id="collage-grid-simple" class="collage-grid-simple">
                        <!-- 6 slots para fotos -->
                        <div class="collage-slot" data-index="0">
                            <div class="slot-placeholder">Foto 1</div>
                        </div>
                        <div class="collage-slot" data-index="1">
                            <div class="slot-placeholder">Foto 2</div>
                        </div>
                        <div class="collage-slot" data-index="2">
                            <div class="slot-placeholder">Foto 3</div>
                        </div>
                        <div class="collage-slot" data-index="3">
                            <div class="slot-placeholder">❤</div>
                        </div>
                        <div class="collage-slot" data-index="4">
                            <div class="slot-placeholder">Foto 5</div>
                        </div>
                        <div class="collage-slot" data-index="5">
                            <div class="slot-placeholder">Foto 6</div>
                        </div>
                    </div>
                </div>
                
                <!-- Mensajes -->
                <div id="collage-message-simple" class="collage-message" style="display: none;">
                    ¡Collage descargado con éxito preciosa! 💖
                </div>
                
                <!-- Instrucciones -->
                <div class="simple-instructions">
                    <p><i class="fas fa-info-circle"></i> <strong>Cómo usar:</strong></p>
                    <ol style="text-align: left; margin: 10px 0; font-size: 0.9em;">
                        <li>Haz clic en "Seleccionar Fotos"</li>
                        <li>Elige hasta 6 imágenes</li>
                        <li>Las fotos se colocarán automáticamente</li>
                        <li>Descarga tu collage personalizado</li>
                    </ol>
                </div>
            </div>
        </div>
    `,
    interactive: true
},
    {
        day: 12,
        title: "Vale por una Escapada Romantica",
        icon: "fa-guitar",
        content: `
            <div class="gift-container">
                <div class="coupon">
                    <div class="coupon-title">VALE POR UNA ESCAPADA ROMANTICA (FULL DAY)</div>
                    <p>Este vale canjea una escapadita romantica de lima.</p>
                    <p><strong>Incluye:</strong></p>
                    <ul style="text-align: left; margin: 10px 0 10px 20px;">
                        <li>Elección del destino</li>
                        <li>Elección de los outfits</li>
                        <li>Actividades a realizar</li>
                    </ul>
                    <p><strong>Código:</strong> CITA-AMOR-2026</p>
                    <p>Canjéalo cuando necesites relajarte fuera de la ciudad.</p>
                    <p>Amorchito no olvides tomarle captura para canjearlo.</p>
                </div>
            </div>
        `
    },
    {
    day: 13,
    title: "Juego de Memoria del Amor",
    icon: "fa-brain",
    content: `
        <div class="gift-container">
            <h3 style="color: #d81b60; margin-bottom: 15px;">🧠 Juego de Memoria del Amor</h3>
            <p>Encuentra las parejas de corazones princesita. ¡Tienes que recordar dónde están!</p>
            
            <div class="memory-game-container">
                <div id="memory-game" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin: 20px auto; max-width: 300px;">
                    <!-- Las cartas se generarán con JavaScript -->
                </div>
                
                <div class="memory-stats">
                    <p id="memory-score" style="font-weight: bold; color: #d81b60; margin-top: 15px; font-size: 1.2rem;">
                        Encuentra todas las parejas de corazones
                    </p>
                    <p id="memory-moves" style="color: #ad1457; margin: 5px 0;">Movimientos: 0</p>
                    <p id="memory-time" style="color: #ad1457; margin: 5px 0;">Tiempo: 0s</p>
                </div>
                
                <div class="memory-controls" style="text-align: center; margin-top: 20px;">
                    <button id="restart-memory" class="restart-memory-btn">
                        <i class="fas fa-redo"></i> Reiniciar Juego
                    </button>
                </div>
                
                <div class="memory-instructions" style="margin-top: 20px; padding: 15px; background-color: #fce4ec; border-radius: 10px; border-left: 4px solid #f50057;">
                    <p><i class="fas fa-lightbulb"></i> <strong>Cómo jugar:</strong></p>
                    <ul style="text-align: left; margin: 10px 0; font-size: 0.9em;">
                        <li>Haz clic en una carta para voltearla</li>
                        <li>Encuentra dos cartas iguales para hacer una pareja del amor</li>
                        <li>¡Encuentra todas las 6 parejas para ganar!</li>
                    </ul>
                </div>
            </div>
        </div>
    `,
    interactive: true
},
    {
        day: 14,
        title: "¡Feliz San Valentín!",
        icon: "fa-heart",
        content: `
            <div class="gift-container">
                <div style="text-align: center; padding: 20px;">
                    <div style="font-size: 4rem; color: #f50057; margin: 20px 0;">❤</div>
                    <h3 style="color: #d81b60; margin-bottom: 15px;">¡Feliz San Valentín!</h3>
                    <p>Has llegado al último día de nuestro calendario de pequeñita.</p>
                    <p>Espero que hayas disfrutado cada uno de las sorpresas que preparé para ti.</p>
                    <p>Este último regalo es mi promesa de amor, cariño y compañía en cada día que viene preciosa.</p>
                    <p style="font-size: 1.3rem; margin-top: 20px; color: #f50057; font-weight: bold;">Te amo muchoteeeeeeeee más de lo que las palabras pueden expresar, recuerda que eres el amor de mi vida preciosa y que siempre te haré feliz.</p>
                    <div style="margin-top: 30px; padding: 15px; background-color: #fce4ec; border-radius: 10px;">
                        <p><strong>Tu código especial:</strong> AMOR-ETERN0-2024</p>
                        <p>Guárdalo como recordatorio de este San Valentín especial amorchito.</p>
                    </div>
                </div>
            </div>
        `
    }
];

// Elementos del DOM
const calendarEl = document.getElementById('calendar');
const currentDateEl = document.getElementById('current-date');
const daysRemainingEl = document.getElementById('days-remaining');
const giftModal = document.getElementById('gift-modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');
const closeModalBtn = document.getElementById('close-modal');
const openTodayBtn = document.getElementById('open-today');
const resetCalendarBtn = document.getElementById('reset-calendar');
const instructionsBtn = document.getElementById('instructions-btn');

// Variables de estado
let openedDays = JSON.parse(localStorage.getItem('valentineOpenedDays')) || [];
let today = new Date();
let currentMonth = today.getMonth(); // 0 = Enero, 11 = Diciembre
let currentDay = today.getDate();

// Variable para modo de prueba - TODOS LOS REGALOS HABILITADOS
const TEST_MODE = false; // Cambia a false para volver al modo normal


// Inicialización
function init() {
    updateDateDisplay();
    updateCountdown();
    createCalendar();
    setupEventListeners(); // Eliminada la llamada a createHearts()
    
    // Si es febrero y el día actual está entre el 1 y 14, marcar el día actual
    if (currentMonth === 1 && currentDay >= 1 && currentDay <= 14) {
        setTimeout(() => {
            const todayElement = document.querySelector(`.day[data-day="${currentDay}"]`);
            if (todayElement && !todayElement.classList.contains('opened')) {
                todayElement.classList.add('today');
            }
        }, 100);
    }
}

// Actualizar la fecha actual
function updateDateDisplay() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    currentDateEl.textContent = today.toLocaleDateString('es-ES', options);
}

// Actualizar cuenta regresiva a San Valentín
function updateCountdown() {
    const valentinesDay = new Date(today.getFullYear(), 1, 14); // 14 de febrero
    const timeDiff = valentinesDay.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    
    if (daysDiff > 0) {
        daysRemainingEl.textContent = `${daysDiff} días para San Valentín`;
    } else if (daysDiff === 0) {
        daysRemainingEl.textContent = '¡Hoy es San Valentín!';
    } else if (currentMonth === 1 && currentDay <= 14) {
        daysRemainingEl.textContent = `${15 - currentDay} días de amor restantes`;
    } else {
        daysRemainingEl.textContent = 'El amor dura todo el año ❤';
    }
}

// Crear el calendario con 14 días
function createCalendar() {
    calendarEl.innerHTML = '';
    
    for (let i = 1; i <= 14; i++) {
        const gift = valentineGifts[i-1];
        const dayEl = document.createElement('div');
        dayEl.className = 'day';
        dayEl.setAttribute('data-day', i);
        
        // Verificar si el día ya fue abierto
        const isOpened = openedDays.includes(i);
        
        if (isOpened) {
            dayEl.classList.add('flipped');
        }
        
        // MODIFICACIÓN: En modo prueba, ningún día está deshabilitado
        const isDisabled = TEST_MODE ? false : !isDayAvailable(i);
        
        if (isDisabled && !isOpened) {
            dayEl.classList.add('disabled');
        }
        
        // Marcar el día actual si es febrero y está en el rango
        if (currentMonth === 1 && i === currentDay) {
            dayEl.classList.add('today');
        }
        
        dayEl.innerHTML = `
            <div class="day-inner">
                <div class="day-front">
                    <div class="number">${i}</div>
                    <div class="day-text">Febrero</div>
                </div>
                <div class="day-back">
                    <div class="gift-icon"><i class="fas ${gift.icon}"></i></div>
                    <div class="gift-title">${gift.title}</div>
                    <div class="gift-content">Haz clic para ver tu regalo</div>
                </div>
            </div>
        `;
        
        // Agregar evento click si el día está disponible
        if (!isDisabled || isOpened) {
            dayEl.addEventListener('click', () => openDay(i));
        }
        
        calendarEl.appendChild(dayEl);
    }
}

// Verificar si un día está disponible para abrir
function isDayAvailable(day) {
    // MODIFICACIÓN: En modo prueba, todos los días están disponibles
    if (TEST_MODE) {
        return true;
    }
    
    // Si no es febrero, solo el día 1 está disponible (para demostración)
    if (currentMonth !== 1) {
        return day === 1; // Para demostración cuando no es febrero
    }
    
    // Si es febrero, el día está disponible si es hoy o un día anterior
    return day <= currentDay;
}

// Abrir un día del calendario
function openDay(day) {
    const dayEl = document.querySelector(`.day[data-day="${day}"]`);
    
    // MODIFICACIÓN: En modo prueba, siempre se puede abrir cualquier día
    if (!TEST_MODE) {
        // Si el día no está disponible y no ha sido abierto antes, salir
        if (!isDayAvailable(day) && !openedDays.includes(day)) {
            return;
        }
    }
    
    // Si no ha sido abierto antes, guardarlo
    if (!openedDays.includes(day)) {
        openedDays.push(day);
        localStorage.setItem('valentineOpenedDays', JSON.stringify(openedDays));
    }
    
    // Voltear la tarjeta
    dayEl.classList.add('flipped');
    dayEl.classList.remove('today');
    
    // Mostrar el regalo en el modal
    showDayGift(day);
}

// Mostrar regalo del día en modal
function showDayGift(day) {
    const gift = valentineGifts[day-1];
    modalTitle.textContent = `Día ${day}: ${gift.title}`;
    modalContent.innerHTML = gift.content;
    giftModal.style.display = 'flex';
    
    // Inicializar funcionalidades interactivas si las tiene
    if (gift.interactive) {
        initInteractiveGift(day);
    }
}

// Inicializar funcionalidades interactivas para cada regalo
function initInteractiveGift(day) {
    switch(day) {
        case 1: // Rompecabezas
            initPuzzle();
            break;
        case 4: // Playlist
            initPlaylist();
            break;
        case 5: // Foto con marco
            initPhotoFrame();
            break;
        case 7: // Poema generado
            initPoemGenerator();
            break;
        case 8: // Árbol de deseos
            initWishTree();
            break;
        case 10: // Quiz
            initQuiz();
            break;
        case 11: // Collage
            initCollage();
            break;
        case 13: // Juego de memoria
            initMemoryGame();
            break;
    }
}

// Rompecabezas del día 1
// Rompecabezas del día 1 - CON IMAGEN
function initPuzzle() {
    console.log("Iniciando rompecabezas...");
    
    // Elementos del DOM
    const puzzleUpload = document.getElementById('puzzle-upload');
    const shuffleBtn = document.getElementById('shuffle-puzzle');
    const solveBtn = document.getElementById('solve-puzzle');
    const shareBtn = document.getElementById('share-puzzle');
    const puzzlePiecesContainer = document.getElementById('puzzle-pieces-container');
    const puzzleGrid = document.getElementById('puzzle-grid');
    const puzzleMessageContainer = document.getElementById('puzzle-message-container');
    const puzzleMessage = document.getElementById('puzzle-message');
    const originalImageContainer = document.getElementById('original-image-container');
    const puzzleOriginal = document.getElementById('puzzle-original');
    const puzzleStats = document.getElementById('puzzle-stats');
    const puzzleTimeEl = document.getElementById('puzzle-time');
    const puzzleMovesEl = document.getElementById('puzzle-moves');
    const puzzlePiecesEl = document.getElementById('puzzle-pieces');
    
    // Variables del juego
    let originalImage = null;
    let puzzlePieces = [];
    let gridSlots = Array(9).fill(null); // 9 slots (3x3)
    let correctPieces = 0;
    let totalMoves = 0;
    let startTime = null;
    let timerInterval = null;
    let gameActive = false;
    
    // Inicializar rompecabezas con una imagen
    function initPuzzleWithImage(imageSrc) {
        console.log("Inicializando rompecabezas con imagen...");
        
        // Resetear variables
        puzzlePieces = [];
        gridSlots = Array(9).fill(null);
        correctPieces = 0;
        totalMoves = 0;
        gameActive = true;
        
        // Detener timer anterior
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
        
        // Actualizar UI
        puzzlePiecesContainer.innerHTML = '';
        puzzleGrid.innerHTML = '';
        puzzleMessageContainer.style.display = 'none';
        puzzleStats.style.display = 'flex';
        puzzleOriginal.style.display = 'block';
        
        puzzleTimeEl.textContent = '0';
        puzzleMovesEl.textContent = '0';
        puzzlePiecesEl.textContent = '0/9';
        
        // Mostrar imagen original
        originalImageContainer.innerHTML = '';
        const img = document.createElement('img');
        img.src = imageSrc;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        originalImageContainer.appendChild(img);
        
        // Habilitar botones
        shuffleBtn.disabled = false;
        solveBtn.disabled = false;
        
        // Crear piezas del rompecabezas (3x3 = 9 piezas)
        createPuzzlePieces(imageSrc);
        
        // Crear cuadrícula
        createGrid();
        
        // Mezclar piezas
        shufflePieces();
        
        // Iniciar timer
        startTime = Date.now();
        timerInterval = setInterval(updateTimer, 1000);
        
        console.log("Rompecabezas inicializado con 9 piezas");
    }
    
    // Crear piezas del rompecabezas
    function createPuzzlePieces(imageSrc) {
        // Crear 9 piezas (3 filas x 3 columnas)
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                const pieceIndex = row * 3 + col;
                
                // Crear elemento de pieza
                const piece = document.createElement('div');
                piece.className = 'puzzle-piece-img';
                piece.dataset.index = pieceIndex;
                piece.dataset.row = row;
                piece.dataset.col = col;
                piece.draggable = true;
                
                // Establecer fondo con la porción correcta de la imagen
                piece.style.backgroundImage = `url(${imageSrc})`;
                piece.style.backgroundPosition = `-${col * 80}px -${row * 80}px`;
                
                // Event listeners para arrastrar
                piece.addEventListener('dragstart', handleDragStart);
                piece.addEventListener('dragend', handleDragEnd);
                
                // También permitir clic para colocar automáticamente
                piece.addEventListener('click', () => tryAutoPlacePiece(piece));
                
                puzzlePieces.push(piece);
                puzzlePiecesContainer.appendChild(piece);
            }
        }
    }
    
    // Crear cuadrícula
    function createGrid() {
        puzzleGrid.style.display = 'grid';
        
        for (let i = 0; i < 9; i++) {
            const slot = document.createElement('div');
            slot.className = 'grid-slot';
            slot.dataset.index = i;
            slot.dataset.row = Math.floor(i / 3);
            slot.dataset.col = i % 3;
            
            // Event listeners para soltar
            slot.addEventListener('dragover', handleDragOver);
            slot.addEventListener('dragenter', handleDragEnter);
            slot.addEventListener('dragleave', handleDragLeave);
            slot.addEventListener('drop', handleDrop);
            
            puzzleGrid.appendChild(slot);
        }
    }
    
    // Mezclar piezas
    function shufflePieces() {
        console.log("Mezclando piezas...");
        
        // Mezclar orden de las piezas visualmente
        const piecesArray = Array.from(puzzlePiecesContainer.children);
        
        // Orden aleatorio
        for (let i = piecesArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            puzzlePiecesContainer.appendChild(piecesArray[j]);
        }
        
        // Resetear grid
        gridSlots = Array(9).fill(null);
        correctPieces = 0;
        updatePiecesCount();
        
        // Actualizar visualización del grid
        const slots = puzzleGrid.querySelectorAll('.grid-slot');
        slots.forEach(slot => {
            slot.classList.remove('filled');
            slot.innerHTML = '';
        });
        
        totalMoves++;
        updateMovesCount();
    }
    
    // Mostrar solución
    function showSolution() {
        console.log("Mostrando solución...");
        
        // Limpiar grid
        const slots = puzzleGrid.querySelectorAll('.grid-slot');
        slots.forEach(slot => {
            slot.classList.remove('filled');
            slot.innerHTML = '';
        });
        
        // Colocar todas las piezas en su posición correcta
        puzzlePieces.forEach(piece => {
            const correctIndex = parseInt(piece.dataset.index);
            const slot = puzzleGrid.querySelector(`.grid-slot[data-index="${correctIndex}"]`);
            
            if (slot && !gridSlots[correctIndex]) {
                const pieceClone = piece.cloneNode(true);
                pieceClone.classList.add('correct');
                pieceClone.draggable = false;
                
                slot.appendChild(pieceClone);
                slot.classList.add('filled');
                gridSlots[correctIndex] = pieceClone;
                
                // Remover la pieza del contenedor de piezas sueltas
                piece.style.display = 'none';
            }
        });
        
        correctPieces = 9;
        updatePiecesCount();
        checkPuzzleComplete();
    }
    
    // Manejar inicio de arrastre
    function handleDragStart(e) {
        if (!gameActive) return;
        
        this.classList.add('dragging');
        e.dataTransfer.setData('text/plain', this.dataset.index);
        e.dataTransfer.effectAllowed = 'move';
    }
    
    // Manejar fin de arrastre
    function handleDragEnd() {
        this.classList.remove('dragging');
    }
    
    // Permitir soltar
    function handleDragOver(e) {
        if (!gameActive) return;
        e.preventDefault();
    }
    
    // Efecto al entrar en un slot
    function handleDragEnter(e) {
        if (!gameActive) return;
        e.preventDefault();
        this.classList.add('hover');
    }
    
    // Efecto al salir de un slot
    function handleDragLeave() {
        this.classList.remove('hover');
    }
    
    // Manejar soltar pieza
    function handleDrop(e) {
        if (!gameActive) return;
        e.preventDefault();
        this.classList.remove('hover');
        
        const pieceIndex = e.dataTransfer.getData('text/plain');
        const piece = puzzlePiecesContainer.querySelector(`.puzzle-piece-img[data-index="${pieceIndex}"]`);
        
        if (piece && !this.classList.contains('filled')) {
            placePieceInSlot(piece, this);
        }
    }
    
    // Intentar colocar pieza automáticamente (por clic)
    function tryAutoPlacePiece(piece) {
        if (!gameActive) return;
        
        // Encontrar primer slot vacío
        const emptySlot = puzzleGrid.querySelector('.grid-slot:not(.filled)');
        if (emptySlot) {
            placePieceInSlot(piece, emptySlot);
        }
    }
    
    // Colocar pieza en un slot
   // Colocar pieza en un slot
function placePieceInSlot(piece, slot) {
    const slotIndex = parseInt(slot.dataset.index);
    const pieceIndex = parseInt(piece.dataset.index);
    
    // Verificar si la pieza va en la posición correcta
    const isCorrectPosition = (slotIndex === pieceIndex);
    
    if (isCorrectPosition) {
        // Posición correcta - colocar permanentemente
        const pieceClone = piece.cloneNode(true);
        pieceClone.classList.add('correct');
        pieceClone.draggable = false;
        
        // Agregar al slot
        slot.appendChild(pieceClone);
        slot.classList.add('filled');
        
        // Ocultar la pieza original
        piece.style.display = 'none';
        
        // Actualizar estado
        gridSlots[slotIndex] = pieceClone;
        correctPieces++;
        
        // Actualizar contadores
        totalMoves++;
        updateMovesCount();
        updatePiecesCount();
        
        // Verificar si se completó el rompecabezas
        checkPuzzleComplete();
        
    } else {
        // Posición incorrecta - mostrar mensaje y regresar pieza
        totalMoves++;
        updateMovesCount();
        
        // Efecto visual de error
        slot.style.backgroundColor = '#ffcdd2';
        slot.style.borderColor = '#f44336';
        
        // Mostrar mensaje temporal
        const errorMsg = document.createElement('div');
        errorMsg.textContent = '✗ Incorrecto';
        errorMsg.style.color = '#f44336';
        errorMsg.style.fontWeight = 'bold';
        errorMsg.style.fontSize = '0.8rem';
        errorMsg.style.position = 'absolute';
        errorMsg.style.top = '-25px';
        errorMsg.style.left = '50%';
        errorMsg.style.transform = 'translateX(-50%)';
        errorMsg.style.whiteSpace = 'nowrap';
        
        slot.style.position = 'relative';
        slot.appendChild(errorMsg);
        
        // Quitar efectos después de un momento
        setTimeout(() => {
            slot.style.backgroundColor = '';
            slot.style.borderColor = '';
            slot.style.position = '';
            
            if (errorMsg.parentNode) {
                errorMsg.remove();
            }
            
            // Regresar la pieza al área de piezas
            // Primero, mostrar la pieza original si estaba oculta
            piece.style.display = 'block';
            piece.style.opacity = '0.5';
            
            // Efecto de regreso
            setTimeout(() => {
                piece.style.opacity = '1';
                
                // Si la pieza no está en el contenedor, agregarla
                if (!piece.parentNode || piece.parentNode.id !== 'puzzle-pieces-container') {
                    puzzlePiecesContainer.appendChild(piece);
                }
            }, 300);
            
        }, 1000);
    }
}
    
    // Actualizar contador de tiempo
    function updateTimer() {
        if (startTime) {
            const elapsed = Math.floor((Date.now() - startTime) / 1000);
            puzzleTimeEl.textContent = elapsed;
        }
    }
    
    // Actualizar contador de movimientos
    function updateMovesCount() {
        puzzleMovesEl.textContent = totalMoves;
    }
    
    // Actualizar contador de piezas correctas
    function updatePiecesCount() {
        puzzlePiecesEl.textContent = `${correctPieces}/9`;
    }
    
    // Verificar si el rompecabezas está completo
    function checkPuzzleComplete() {
        if (correctPieces === 9) {
            completePuzzle();
        }
    }
    
    // Completar rompecabezas
    function completePuzzle() {
        console.log("¡Rompecabezas completado!");
        
        gameActive = false;
        
        // Detener timer
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
        
        // Mostrar mensaje de felicitaciones
        puzzleMessageContainer.style.display = 'block';
        
        // Mensaje personalizado basado en el tiempo
        let message = '';
        const time = parseInt(puzzleTimeEl.textContent);
        
        if (time < 30) {
            message = '¡Eres un genio! Completaste el rompecabezas en tiempo récord. ';
        } else if (time < 60) {
            message = '¡Excelente trabajo! Resolviste el rompecabezas rápidamente. ';
        } else {
            message = '¡Felicidades! Has demostrado mucha paciencia y dedicación. ';
        }
        
        message += 'Este rompecabezas representa nuestro amor: cada pieza es única, pero juntas forman algo hermoso. ❤';
        
        puzzleMessage.textContent = message;
        
        // Deshabilitar botones
        shuffleBtn.disabled = true;
        solveBtn.disabled = true;
        
        // Efecto de confeti
        createPuzzleConfetti();
    }
    
    // Efecto de confeti para victoria
    function createPuzzleConfetti() {
        const confettiColors = ['#f50057', '#ff4081', '#d81b60', '#ad1457', '#880e4f'];
        const symbols = ['❤', '💖', '💗', '💓', '💕', '💞', '🧩', '🎉', '✨'];
        
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.textContent = symbols[Math.floor(Math.random() * symbols.length)];
                confetti.style.position = 'fixed';
                confetti.style.fontSize = Math.random() * 20 + 15 + 'px';
                confetti.style.color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.top = '-50px';
                confetti.style.zIndex = '9999';
                confetti.style.pointerEvents = 'none';
                confetti.style.opacity = '0.9';
                confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
                
                document.body.appendChild(confetti);
                
                // Remover después de la animación
                setTimeout(() => {
                    if (confetti.parentNode) {
                        confetti.remove();
                    }
                }, 5000);
            }, i * 50);
        }
    }
    
    
    // Event Listeners
    puzzleUpload.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(event) {
                originalImage = event.target.result;
                initPuzzleWithImage(originalImage);
            };
            reader.readAsDataURL(file);
        }
    });
    
    shuffleBtn.addEventListener('click', shufflePieces);
    solveBtn.addEventListener('click', showSolution);
    shareBtn.addEventListener('click', shareAchievement);
    
    // También permitir arrastrar y soltar imágenes
    puzzlePiecesContainer.addEventListener('dragover', (e) => {
        e.preventDefault();
        puzzlePiecesContainer.style.backgroundColor = '#fce4ec';
    });
    
    puzzlePiecesContainer.addEventListener('dragleave', () => {
        puzzlePiecesContainer.style.backgroundColor = 'transparent';
    });
    
    puzzlePiecesContainer.addEventListener('drop', (e) => {
        e.preventDefault();
        puzzlePiecesContainer.style.backgroundColor = 'transparent';
        
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(event) {
                originalImage = event.target.result;
                initPuzzleWithImage(originalImage);
            };
            reader.readAsDataURL(file);
        }
    });
    
    console.log("Rompecabezas inicializado correctamente");
}

// Playlist del día 4 - CON REPRODUCTOR FUNCIONAL
// Variable global para el reproductor de audio del día 4
let audioPlayer = null;


function initPlaylist() {
    // Datos de las canciones (en un proyecto real, serían archivos MP3 reales)
    const songs = [
        {
            id: 1,
            title: "Perfect - Ed Sheeran",
            duration: "4:23",
            audioSrc: "audio/Ed Sheeran - Perfect.mp3"
        },
        {
            id: 2,
            title: "Until I Found You - Stephen Sanchez, Em Beihold",
            duration: "2:55",
            audioSrc: "audio/Stephen Sanchez, Em Beihold - Until I Found You (Lyrics)(I would never fall in love again).mp3" 
        },
        {
            id: 3,
            title: "Química Mayor - Mon Laferte",
            duration: "3:45",
            audioSrc: "audio/Mon Laferte - Química Mayor  letra.mp3" 
        },
        {
            id: 4,
            title: "Compartir - Carla Morrison",
            duration: "4:23",
            audioSrc: "audio/Carla Morrison - Compartir [VIDEO OFICIAL].mp3" 
        },
        {
            id: 5,
            title: "Alma Dinamita - Wos",
            duration: "2:53",
            audioSrc: "audio/ALMA DINAMITA.mp3" 
        },
        {
            id: 6,
            title: "Amor - Emmanuell Cortess",
            duration: "3:16",
            audioSrc: "audio/Emmanuell Cortess-Amor(letralyrics).mp3" 
        },
        {
            id: 7,
            title: "Favorito - Camilo",
            duration: "3:30",
            audioSrc: "audio/Camilo - Favorito (Official Video).mp3"
        }
    ];
    
     // Elementos del DOM
    audioPlayer = new Audio(); // Usar la variable global
    const playBtn = document.getElementById('play-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const stopBtn = document.getElementById('stop-btn');
    const volumeSlider = document.getElementById('volume-slider');
    const nowPlaying = document.getElementById('now-playing');
    const progressBar = document.getElementById('progress');
    const currentTimeEl = document.getElementById('current-time');
    const totalTimeEl = document.getElementById('total-time');
    const songElements = document.querySelectorAll('.song');
    const playSongBtns = document.querySelectorAll('.play-song-btn');
    const progressBarContainer = document.querySelector('.progress-bar');
    // Estado del reproductor
    let currentSongIndex = 0;
    let isPlaying = false;
    
    // Formatear tiempo (segundos a MM:SS)
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }
      // Cargar una canción
    function loadSong(index) {
        if (index < 0) index = songs.length - 1;
        if (index >= songs.length) index = 0;
        
        currentSongIndex = index;
        const song = songs[index];
        
        // Actualizar fuente de audio
        audioPlayer.src = song.audioSrc;
        
        // Actualizar interfaz
        nowPlaying.textContent = `🎵 ${song.title}`;
        totalTimeEl.textContent = song.duration;
        
        // Remover clase 'playing' de todas las canciones
        songElements.forEach(el => el.classList.remove('playing'));
        
        // Agregar clase 'playing' a la canción actual
        const currentSongElement = document.querySelector(`.song[data-song="${song.id}"]`);
        if (currentSongElement) {
            currentSongElement.classList.add('playing');
        }
        
        // Si estaba reproduciendo, reproducir la nueva canción
        if (isPlaying) {
            audioPlayer.play().catch(e => {
                console.log("Error al reproducir:", e);
                // Si hay error de reproducción, mostrar mensaje amigable
                nowPlaying.textContent = `🎵 ${song.title} (Click en reproducir)`;
            });
        }
    }
    
    // Reproducir canción
    function playSong() {
        audioPlayer.play()
            .then(() => {
                isPlaying = true;
                playBtn.style.display = 'none';
                pauseBtn.style.display = 'flex';
            })
            .catch(e => {
                console.log("Error al reproducir:", e);
                // Mostrar mensaje amigable si no se puede reproducir automáticamente
                nowPlaying.textContent = "Click en 'Reproducir' o selecciona una canción";
                isPlaying = false;
                playBtn.style.display = 'flex';
                pauseBtn.style.display = 'none';
            });
    }
    
    // Pausar canción
    function pauseSong() {
        audioPlayer.pause();
        isPlaying = false;
        playBtn.style.display = 'flex';
        pauseBtn.style.display = 'none';
    }
    
    // Detener canción
    function stopSong() {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        isPlaying = false;
        playBtn.style.display = 'flex';
        pauseBtn.style.display = 'none';
        progressBar.style.width = '0%';
        currentTimeEl.textContent = '0:00';
    }
    
    // Canción anterior
    function prevSong() {
        loadSong(currentSongIndex - 1);
        if (isPlaying) {
            playSong();
        }
    }
    
    // Siguiente canción
    function nextSong() {
        loadSong(currentSongIndex + 1);
        if (isPlaying) {
            playSong();
        }
    }
    
    // Actualizar barra de progreso
    function updateProgress() {
        const { currentTime, duration } = audioPlayer;
        
        if (duration) {
            const progressPercent = (currentTime / duration) * 100;
            progressBar.style.width = `${progressPercent}%`;
            currentTimeEl.textContent = formatTime(currentTime);
        }
    }
    
    // Establecer progreso al hacer clic en la barra
    function setProgress(e) {
        const width = this.clientWidth;
        const clickX = e.offsetX;
        const duration = audioPlayer.duration;
        
        if (duration) {
            audioPlayer.currentTime = (clickX / width) * duration;
        }
    }
    
    // Event Listeners para botones del reproductor
    playBtn.addEventListener('click', playSong);
    pauseBtn.addEventListener('click', pauseSong);
    stopBtn.addEventListener('click', stopSong);
    prevBtn.addEventListener('click', prevSong);
    nextBtn.addEventListener('click', nextSong);
    
    // Event Listeners para canciones individuales
    playSongBtns.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Evitar que se active el evento del contenedor
            loadSong(index);
            playSong();
        });
    });
    
    // Event Listeners para filas de canciones
    songElements.forEach((songEl, index) => {
        songEl.addEventListener('click', () => {
            loadSong(index);
            playSong();
        });
    });
    
    // Event Listeners para controles de volumen y progreso
    volumeSlider.addEventListener('input', () => {
        audioPlayer.volume = volumeSlider.value;
    });
    
    progressBarContainer.addEventListener('click', setProgress);
    
    // Event Listeners del reproductor de audio
    audioPlayer.addEventListener('timeupdate', updateProgress);
    audioPlayer.addEventListener('ended', nextSong);
    audioPlayer.addEventListener('loadedmetadata', () => {
        totalTimeEl.textContent = formatTime(audioPlayer.duration);
    });
    
    // Configuración inicial
    audioPlayer.volume = volumeSlider.value;
    pauseBtn.style.display = 'none'; // Ocultar botón de pausa al inicio
    
    // Cargar primera canción
    loadSong(0);
    
    // Nota para el usuario sobre las muestras de audio
    console.log("Reproductor de música cargado. Nota: Las canciones son muestras de audio gratuitas de Mixkit.");
}


// Foto con marco del día 5
// Foto con marco del día 5 - CON DESCARGA
function initPhotoFrame() {
    const photoUpload = document.getElementById('photo-upload');
    const photoFrame = document.getElementById('photo-frame');
    const downloadBtn = document.getElementById('download-btn');
    const downloadMessage = document.getElementById('download-message');
    const frameStyleBtns = document.querySelectorAll('.frame-style-btn');
    
    // Variables de estado
    let currentImage = null;
    let currentFrameStyle = 'hearts';
    let canvas = null;
    let ctx = null;
    
    // Inicializar canvas para descarga
    function initCanvas() {
        if (!canvas) {
            canvas = document.createElement('canvas');
            ctx = canvas.getContext('2d');
        }
    }
    
    // Crear decoraciones del marco según el estilo
    function createFrameDecorations(style) {
        const decorations = [];
        
        if (style === 'hearts') {
            // 8 corazones alrededor
            const positions = [
                { top: '10px', left: '10px' },
                { top: '10px', left: '50%', transform: 'translateX(-50%)' },
                { top: '10px', right: '10px' },
                { top: '50%', right: '10px', transform: 'translateY(-50%)' },
                { bottom: '10px', right: '10px' },
                { bottom: '10px', left: '50%', transform: 'translateX(-50%)' },
                { bottom: '10px', left: '10px' },
                { top: '50%', left: '10px', transform: 'translateY(-50%)' }
            ];
            
            const hearts = ['❤', '💖', '💗', '💓', '💕', '💞', '💘', '💝'];
            positions.forEach((pos, index) => {
                decorations.push({
                    ...pos,
                    content: hearts[index % hearts.length],
                    className: 'heart-decoration'
                });
            });
            
        } else if (style === 'simple') {
            // 4 corazones simples en las esquinas
            const positions = [
                { top: '15px', left: '15px' },
                { top: '15px', right: '15px' },
                { bottom: '15px', left: '15px' },
                { bottom: '15px', right: '15px' }
            ];
            
            positions.forEach(pos => {
                decorations.push({
                    ...pos,
                    content: '❤',
                    className: 'heart-decoration frame-simple'
                });
            });
            
        } else if (style === 'romantic') {
            // Marco romántico con más decoración
            const positions = [
                { top: '20px', left: '20px' },
                { top: '20px', right: '20px' },
                { bottom: '20px', left: '20px' },
                { bottom: '20px', right: '20px' },
                { top: '50%', left: '20px', transform: 'translateY(-50%)' },
                { top: '50%', right: '20px', transform: 'translateY(-50%)' },
                { top: '20px', left: '50%', transform: 'translateX(-50%)' },
                { bottom: '20px', left: '50%', transform: 'translateX(-50%)' }
            ];
            
            const romanticSymbols = ['❤', '🌹', '💐', '✨', '💖', '🌸', '💕', '💗'];
            positions.forEach((pos, index) => {
                decorations.push({
                    ...pos,
                    content: romanticSymbols[index % romanticSymbols.length],
                    className: 'heart-decoration frame-romantic'
                });
            });
        }
        
        return decorations;
    }
    
    // Aplicar marco a la imagen
    function applyFrameToImage(imgElement, style) {
        // Limpiar el marco
        photoFrame.innerHTML = '';
        
        // Agregar la imagen
        const imgContainer = document.createElement('div');
        imgContainer.style.width = '100%';
        imgContainer.style.height = '100%';
        imgContainer.style.position = 'relative';
        imgContainer.style.overflow = 'hidden';
        imgContainer.style.borderRadius = '10px';
        
        const imgClone = imgElement.cloneNode();
        imgClone.style.width = '100%';
        imgClone.style.height = '100%';
        imgClone.style.objectFit = 'cover';
        imgContainer.appendChild(imgClone);
        
        // Agregar decoraciones del marco
        const decorations = createFrameDecorations(style);
        decorations.forEach(deco => {
            const decoElement = document.createElement('div');
            decoElement.textContent = deco.content;
            decoElement.className = deco.className;
            
            // Aplicar estilos de posición
            Object.keys(deco).forEach(key => {
                if (key !== 'content' && key !== 'className') {
                    decoElement.style[key] = deco[key];
                }
            });
            
            imgContainer.appendChild(decoElement);
        });
        
        // Agregar texto personalizado
        const textOverlay = document.createElement('div');
        textOverlay.textContent = 'Te Amo ❤';
        textOverlay.style.position = 'absolute';
        textOverlay.style.bottom = '20px';
        textOverlay.style.left = '50%';
        textOverlay.style.transform = 'translateX(-50%)';
        textOverlay.style.color = 'white';
        textOverlay.style.fontSize = '1.2rem';
        textOverlay.style.fontWeight = 'bold';
        textOverlay.style.textShadow = '2px 2px 4px rgba(0,0,0,0.5)';
        textOverlay.style.backgroundColor = 'rgba(245, 0, 87, 0.7)';
        textOverlay.style.padding = '5px 15px';
        textOverlay.style.borderRadius = '20px';
        imgContainer.appendChild(textOverlay);
        
        photoFrame.appendChild(imgContainer);
        return imgContainer;
    }
    
    // Generar imagen para descargar
    function generateDownloadableImage(imgElement, style) {
        initCanvas();
        
        // Tamaño del canvas (un poco más grande para el marco)
        canvas.width = 400;
        canvas.height = 400;
        
        // Fondo blanco
        ctx.fillStyle = '#fce4ec';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Dibujar imagen (con margen para el marco)
        const margin = 20;
        const imgSize = canvas.width - (margin * 2);
        
        // Dibujar imagen
        ctx.drawImage(imgElement, margin, margin, imgSize, imgSize);
        
        // Dibujar decoraciones del marco
        const decorations = createFrameDecorations(style);
        decorations.forEach(deco => {
            // Convertir posiciones relativas a absolutas
            let x, y;
            
            if (deco.left && deco.left.includes('%')) {
                const percent = parseInt(deco.left) / 100;
                x = canvas.width * percent;
            } else if (deco.left) {
                x = parseInt(deco.left) + margin;
            }
            
            if (deco.right && deco.right.includes('%')) {
                const percent = parseInt(deco.right) / 100;
                x = canvas.width - (canvas.width * percent);
            } else if (deco.right) {
                x = canvas.width - parseInt(deco.right) - margin;
            }
            
            if (deco.top && deco.top.includes('%')) {
                const percent = parseInt(deco.top) / 100;
                y = canvas.height * percent;
            } else if (deco.top) {
                y = parseInt(deco.top) + margin;
            }
            
            if (deco.bottom && deco.bottom.includes('%')) {
                const percent = parseInt(deco.bottom) / 100;
                y = canvas.height - (canvas.height * percent);
            } else if (deco.bottom) {
                y = canvas.height - parseInt(deco.bottom) - margin;
            }
            
            // Ajustar por transformaciones
            if (deco.transform && deco.transform.includes('translate')) {
                const match = deco.transform.match(/translateX\((-?\d+)%\)/);
                if (match) x += (canvas.width * parseInt(match[1]) / 100);
                
                const matchY = deco.transform.match(/translateY\((-?\d+)%\)/);
                if (matchY) y += (canvas.height * parseInt(matchY[1]) / 100);
            }
            
            // Dibujar texto (corazón/emoji)
            ctx.font = '30px Arial';
            ctx.fillStyle = '#f50057';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(deco.content, x, y);
        });
        
        // Agregar texto "Te Amo ❤" en la parte inferior
        ctx.font = 'bold 24px Arial';
        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = '#d81b60';
        ctx.lineWidth = 3;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        const text = 'Te Amo ❤';
        const textX = canvas.width / 2;
        const textY = canvas.height - 40;
        
        // Texto con borde
        ctx.strokeText(text, textX, textY);
        ctx.fillText(text, textX, textY);
        
        // Fondo para el texto
        const textWidth = ctx.measureText(text).width;
        ctx.fillStyle = 'rgba(245, 0, 87, 0.7)';
        ctx.fillRect(textX - textWidth/2 - 10, textY - 20, textWidth + 20, 40);
        ctx.fillStyle = '#ffffff';
        ctx.fillText(text, textX, textY);
        
        return canvas;
    }
    
    // Descargar la imagen
    function downloadImage() {
        if (!currentImage) return;
        
        const finalCanvas = generateDownloadableImage(currentImage, currentFrameStyle);
        
        // Crear enlace de descarga
        const link = document.createElement('a');
        link.download = `foto_con_marco_amor_${Date.now()}.png`;
        link.href = finalCanvas.toDataURL('image/png');
        link.click();
        
        // Mostrar mensaje de éxito
        downloadMessage.style.display = 'block';
        setTimeout(() => {
            downloadMessage.style.display = 'none';
        }, 3000);
    }
    
    // Cambiar estilo de marco
    function changeFrameStyle(style) {
        currentFrameStyle = style;
        
        // Actualizar botones activos
        frameStyleBtns.forEach(btn => {
            if (btn.dataset.style === style) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Si hay una imagen cargada, aplicar el nuevo marco
        if (currentImage) {
            applyFrameToImage(currentImage, style);
        }
    }
    
    // Event Listeners
    photoUpload.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                currentImage = new Image();
                currentImage.onload = function() {
                    applyFrameToImage(currentImage, currentFrameStyle);
                    downloadBtn.disabled = false;
                };
                currentImage.src = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
    
    downloadBtn.addEventListener('click', downloadImage);
    
    frameStyleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            changeFrameStyle(btn.dataset.style);
        });
    });
    
    // También permitir arrastrar y soltar imágenes
    photoFrame.addEventListener('dragover', (e) => {
        e.preventDefault();
        photoFrame.style.backgroundColor = '#f8bbd0';
    });
    
    photoFrame.addEventListener('dragleave', () => {
        photoFrame.style.backgroundColor = '#f8bbd0';
    });
    
    photoFrame.addEventListener('drop', (e) => {
        e.preventDefault();
        photoFrame.style.backgroundColor = '#f8bbd0';
        
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(event) {
                currentImage = new Image();
                currentImage.onload = function() {
                    applyFrameToImage(currentImage, currentFrameStyle);
                    downloadBtn.disabled = false;
                };
                currentImage.src = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
    
    // Inicializar con un ejemplo si no hay imagen
    const exampleImage = new Image();
    exampleImage.onload = function() {
        applyFrameToImage(exampleImage, currentFrameStyle);
    };
    exampleImage.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhiYmQwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyMCIgZmlsbD0iIzg4MGU0ZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHktIjAuM2VtIj5TdWIgdW5hIGZvdG8gZXNwZWNpYWw8L3RleHQ+PC9zdmc+';
}

// Generador de poemas del día 7
function initPoemGenerator() {
    const generateBtn = document.getElementById('generate-poem');
    const poemOutput = document.getElementById('poem-output');
    
    const poemTemplates = [
        "En este día de amor y pasión,\n{nombre1} y {nombre2} sin distracción.\nSus corazones laten al unísono,\nEn un baile eterno, dulce y risueño.",
        "{nombre1} y {nombre2}, juntos en un sueño,\nCompartiendo risas, viviendo el momento.\nEl amor los guía, les da la razón,\nPara seguir unidos con el corazón.",
        "Dos almas unidas, {nombre1} y {nombre2},\nComparten un amor puro y fiel.\nEn cada mirada, en cada sonrisa,\nSe refleja una eterna promesa."
    ];
    
    generateBtn.addEventListener('click', () => {
        const name1 = document.getElementById('name1').value || "Amor";
        const name2 = document.getElementById('name2').value || "Vida";
        
        const randomTemplate = poemTemplates[Math.floor(Math.random() * poemTemplates.length)];
        const poem = randomTemplate
            .replace(/{nombre1}/g, name1)
            .replace(/{nombre2}/g, name2);
        
        poemOutput.innerHTML = `<p style="white-space: pre-line;">${poem}</p>`;
    });
}

// Árbol de deseos del día 8
function initWishTree() {
    const wishInput = document.getElementById('wish-input');
    const addWishBtn = document.getElementById('add-wish');
    const wishBranch = document.getElementById('wish-branch');
    
    addWishBtn.addEventListener('click', () => {
        const wish = wishInput.value.trim();
        if (wish) {
            const wishElement = document.createElement('div');
            wishElement.textContent = "❤ " + wish;
            wishElement.style.color = '#f50057';
            wishElement.style.margin = '5px';
            wishElement.style.fontSize = '0.9rem';
            wishBranch.appendChild(wishElement);
            wishInput.value = '';
        }
    });
}

// Quiz del día 10
function initQuiz() {
    const submitBtn = document.getElementById('submit-quiz');
    const quizResult = document.getElementById('quiz-result');
    
    submitBtn.addEventListener('click', () => {
        const answers = {
            q1: document.querySelector('input[name="q4"]:checked'),
            q2: document.querySelector('input[name="q7"]:checked')
        };
        
        let score = 0;
        if (answers.q1) score++;
        if (answers.q2) score++;
        
        const messages = [
            "¡Parece que necesitas conocerme mejor pequeña pony!",
            "¡Buen trabajo! Me conoces muy bien preciosa.",
            "¡Excelente! Eres una experta amorchito"
        ];
        
        quizResult.textContent = `Puntuación: ${score}/2 - ${messages[score]}`;
    });
}

// Collage del día 11 - VERSIÓN SIMPLIFICADA Y FUNCIONAL
function initCollage() {
    console.log("Iniciando collage...");
    
    // Elementos del DOM
    const collageUpload = document.getElementById('collage-upload-simple');
    const downloadBtn = document.getElementById('download-collage-simple');
    const collageMessage = document.getElementById('collage-message-simple');
    const collageSlots = document.querySelectorAll('.collage-slot');
    
    // Estado
    let photos = Array(6).fill(null); // 6 slots, el slot 3 es siempre el corazón
    
    // Cargar una foto en un slot específico
    function loadPhotoToSlot(file, slotIndex) {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = function(e) {
                photos[slotIndex] = {
                    url: e.target.result,
                    file: file
                };
                updateSlotDisplay(slotIndex);
                resolve();
            };
            reader.readAsDataURL(file);
        });
    }
    
    // Actualizar la visualización de un slot
    function updateSlotDisplay(slotIndex) {
        const slot = document.querySelector(`.collage-slot[data-index="${slotIndex}"]`);
        if (!slot) return;
        
        // Slot 3 es siempre el corazón, no se puede modificar
        if (slotIndex === 3) {
            slot.innerHTML = '<div class="slot-placeholder" style="font-size: 2rem;">❤</div>';
            slot.classList.remove('filled');
            return;
        }
        
        const photo = photos[slotIndex];
        
        if (photo) {
            // Mostrar foto
            slot.innerHTML = '';
            slot.classList.add('filled');
            
            const img = document.createElement('img');
            img.src = photo.url;
            img.alt = `Foto ${slotIndex + 1}`;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            
            const removeBtn = document.createElement('button');
            removeBtn.className = 'remove-photo-simple';
            removeBtn.innerHTML = '<i class="fas fa-times"></i>';
            removeBtn.onclick = (e) => {
                e.stopPropagation();
                removePhoto(slotIndex);
            };
            
            slot.appendChild(img);
            slot.appendChild(removeBtn);
        } else {
            // Mostrar placeholder
            slot.innerHTML = `<div class="slot-placeholder">Foto ${slotIndex < 3 ? slotIndex + 1 : slotIndex}</div>`;
            slot.classList.remove('filled');
        }
    }
    
    // Remover foto de un slot
    function removePhoto(slotIndex) {
        if (slotIndex !== 3) { // No se puede remover el corazón
            photos[slotIndex] = null;
            updateSlotDisplay(slotIndex);
            checkDownloadButton();
        }
    }
    
    // Verificar si se puede habilitar el botón de descarga
    function checkDownloadButton() {
        const hasPhotos = photos.some((photo, index) => photo !== null && index !== 3);
        downloadBtn.disabled = !hasPhotos;
    }
    
    // Procesar archivos subidos
    async function processUploadedFiles(files) {
        const imageFiles = Array.from(files).filter(file => file.type.startsWith('image/'));
        
        if (imageFiles.length === 0) {
            alert('Por favor, selecciona al menos una imagen.');
            return;
        }
        
        // Encontrar slots disponibles (excluyendo el slot 3 - corazón)
        const availableSlots = [0, 1, 2, 4, 5].filter(index => photos[index] === null);
        
        // Limitar al número de slots disponibles
        const filesToProcess = imageFiles.slice(0, availableSlots.length);
        
        for (let i = 0; i < filesToProcess.length; i++) {
            await loadPhotoToSlot(filesToProcess[i], availableSlots[i]);
        }
        
        checkDownloadButton();
        
        if (imageFiles.length > availableSlots.length) {
            alert(`Solo se pudieron cargar ${filesToProcess.length} de ${imageFiles.length} fotos. El collage tiene un límite de 5 fotos.`);
        }
    }
    
    // Generar imagen del collage
    async function generateCollageImage() {
        return new Promise(async (resolve) => {
            // Crear canvas
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            // Tamaño del canvas
            canvas.width = 800;
            canvas.height = 800;
            
            // Fondo
            ctx.fillStyle = '#ffebee';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Título
            ctx.fillStyle = '#d81b60';
            ctx.font = 'bold 36px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('Collage de Amor', canvas.width / 2, 50);
            
            ctx.fillStyle = '#880e4f';
            ctx.font = 'italic 20px Arial';
            ctx.fillText('Nuestros Mejores Momentos', canvas.width / 2, 85);
            
            // Dibujar grid de fotos
            const gridSize = 200;
            const gridMargin = 100;
            const gridSpacing = 10;
            
            // Posiciones en la cuadrícula 3x2
            const positions = [
                { x: gridMargin, y: gridMargin }, // Top-left
                { x: gridMargin + gridSize + gridSpacing, y: gridMargin }, // Top-middle
                { x: gridMargin + (gridSize + gridSpacing) * 2, y: gridMargin }, // Top-right
                { x: gridMargin, y: gridMargin + gridSize + gridSpacing }, // Bottom-left
                { x: gridMargin + gridSize + gridSpacing, y: gridMargin + gridSize + gridSpacing }, // Bottom-middle (corazón)
                { x: gridMargin + (gridSize + gridSpacing) * 2, y: gridMargin + gridSize + gridSpacing } // Bottom-right
            ];
            
            // Dibujar todas las fotos
            for (let i = 0; i < photos.length; i++) {
                const pos = positions[i];
                
                if (i === 3) {
                    // Dibujar corazón en el slot 3
                    ctx.fillStyle = '#f50057';
                    ctx.font = 'bold 60px Arial';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText('❤', pos.x + gridSize/2, pos.y + gridSize/2);
                    
                    // Borde especial para el corazón
                    ctx.strokeStyle = '#d81b60';
                    ctx.lineWidth = 4;
                    ctx.strokeRect(pos.x, pos.y, gridSize, gridSize);
                } else if (photos[i]) {
                    // Dibujar foto
                    await drawImageOnCanvas(ctx, photos[i].url, pos.x, pos.y, gridSize, gridSize);
                    
                    // Borde para fotos
                    ctx.strokeStyle = '#f50057';
                    ctx.lineWidth = 3;
                    ctx.strokeRect(pos.x, pos.y, gridSize, gridSize);
                } else {
                    // Slot vacío
                    ctx.fillStyle = '#f8bbd0';
                    ctx.fillRect(pos.x, pos.y, gridSize, gridSize);
                    
                    ctx.strokeStyle = '#f50057';
                    ctx.lineWidth = 2;
                    ctx.setLineDash([5, 5]);
                    ctx.strokeRect(pos.x, pos.y, gridSize, gridSize);
                    ctx.setLineDash([]);
                }
            }
            
            // Pie de página
            ctx.fillStyle = '#ad1457';
            ctx.font = '18px Arial';
            ctx.fillText('❤ Creado con Amor - San Valentín 2024 ❤', canvas.width / 2, canvas.height - 30);
            
            resolve(canvas);
        });
    }
    
    // Función auxiliar para dibujar imagen en canvas
    function drawImageOnCanvas(ctx, imageUrl, x, y, width, height) {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = function() {
                // Calcular dimensiones para mantener proporción
                const ratio = Math.min(width / img.width, height / img.height);
                const drawWidth = img.width * ratio;
                const drawHeight = img.height * ratio;
                const offsetX = (width - drawWidth) / 2;
                const offsetY = (height - drawHeight) / 2;
                
                ctx.drawImage(img, x + offsetX, y + offsetY, drawWidth, drawHeight);
                resolve();
            };
            img.src = imageUrl;
        });
    }
    
    // Descargar collage
    async function downloadCollage() {
        try {
            const canvas = await generateCollageImage();
            
            // Crear enlace de descarga
            const link = document.createElement('a');
            link.download = `collage_amor_${Date.now()}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
            
            // Mostrar mensaje de éxito
            collageMessage.style.display = 'block';
            setTimeout(() => {
                collageMessage.style.display = 'none';
            }, 3000);
            
        } catch (error) {
            console.error('Error al descargar collage:', error);
            alert('Hubo un error al generar el collage. Por favor, inténtalo de nuevo.');
        }
    }
    
    // Event Listeners
    collageUpload.addEventListener('change', function(e) {
        if (e.target.files.length > 0) {
            processUploadedFiles(e.target.files);
            // Resetear input para poder seleccionar las mismas fotos otra vez
            this.value = '';
        }
    });
    
    downloadBtn.addEventListener('click', downloadCollage);
    
    // Permitir arrastrar y soltar
    const collageArea = document.querySelector('.collage-area');
    
    collageArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        collageArea.style.backgroundColor = '#fce4ec';
    });
    
    collageArea.addEventListener('dragleave', () => {
        collageArea.style.backgroundColor = 'white';
    });
    
    collageArea.addEventListener('drop', (e) => {
        e.preventDefault();
        collageArea.style.backgroundColor = 'white';
        
        if (e.dataTransfer.files.length > 0) {
            processUploadedFiles(e.dataTransfer.files);
        }
    });
    
    // Inicializar slots vacíos
    collageSlots.forEach(slot => {
        const slotIndex = parseInt(slot.dataset.index);
        updateSlotDisplay(slotIndex);
    });
    
    console.log("Collage inicializado correctamente");
}




// Juego de memoria del día 13 - Versión mejorada
// Juego de memoria del día 13 - VERSIÓN CORREGIDA
function initMemoryGame() {
    console.log("Iniciando juego de memoria...");
    
    // Elementos del DOM
    const memoryGame = document.getElementById('memory-game');
    const memoryScore = document.getElementById('memory-score');
    const memoryMoves = document.getElementById('memory-moves');
    const memoryTime = document.getElementById('memory-time');
    const restartBtn = document.getElementById('restart-memory');
    
    // Variables del juego
    let cards = ['❤', '💖', '💗', '💓', '💕', '💞', '💘', '💝', '💗', '💓']; // 10 cartas (5 pares)
    let gameCards = [];
    let firstCard = null;
    let secondCard = null;
    let lockBoard = false;
    let matchedPairs = 0;
    let moves = 0;
    let startTime = null;
    let timerInterval = null;
    let elapsedTime = 0;
    
    // Inicializar el juego
    function initGame() {
        console.log("Inicializando juego...");
        
        // Resetear variables
        firstCard = null;
        secondCard = null;
        lockBoard = false;
        matchedPairs = 0;
        moves = 0;
        elapsedTime = 0;
        
        // Detener timer anterior si existe
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
        
        // Actualizar UI
        memoryScore.textContent = 'Encuentra todas las parejas de corazones';
        memoryScore.style.color = '#d81b60';
        memoryMoves.textContent = 'Movimientos: 0';
        memoryTime.textContent = 'Tiempo: 0s';
        
        // Crear y mezclar cartas
        gameCards = [...cards.slice(0, 10)]; // Tomar 10 cartas (5 pares diferentes)
        gameCards = [...gameCards, ...gameCards]; // Duplicar para hacer pares
        gameCards = shuffleArray(gameCards);
        
        // Limpiar tablero
        memoryGame.innerHTML = '';
        
        // Crear cartas en el tablero
        gameCards.forEach((card, index) => {
            const cardElement = createCardElement(card, index);
            memoryGame.appendChild(cardElement);
        });
        
        // Iniciar timer
        startTime = Date.now();
        timerInterval = setInterval(updateTimer, 1000);
        
        console.log("Juego inicializado con", gameCards.length, "cartas");
    }
    
    // Mezclar array
    function shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }
    
    // Crear elemento de carta
    function createCardElement(card, index) {
        const cardElement = document.createElement('div');
        cardElement.className = 'memory-card';
        cardElement.dataset.card = card;
        cardElement.dataset.index = index;
        
        cardElement.innerHTML = `
            <div class="card-front">?</div>
            <div class="card-back">${card}</div>
        `;
        
        cardElement.addEventListener('click', () => flipCard(cardElement));
        return cardElement;
    }
    
    // Voltear carta
    function flipCard(card) {
        // Validaciones
        if (lockBoard) return;
        if (card === firstCard) return;
        if (card.classList.contains('matched')) return;
        
        // Voltear la carta
        card.classList.add('flipped');
        
        // Si es la primera carta
        if (!firstCard) {
            firstCard = card;
            return;
        }
        
        // Si es la segunda carta
        secondCard = card;
        lockBoard = true;
        moves++;
        memoryMoves.textContent = `Movimientos: ${moves}`;
        
        // Verificar si hacen pareja
        checkForMatch();
    }
    
    // Verificar si las cartas son iguales
    function checkForMatch() {
        const isMatch = firstCard.dataset.card === secondCard.dataset.card;
        
        if (isMatch) {
            disableCards();
        } else {
            unflipCards();
        }
    }
    
    // Deshabilitar cartas emparejadas
    function disableCards() {
        // Marcar como emparejadas
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        
        // Incrementar contador de parejas
        matchedPairs++;
        
        // Actualizar puntuación
        const totalPairs = gameCards.length / 2;
        memoryScore.textContent = `Parejas encontradas: ${matchedPairs}/${totalPairs}`;
        
        // Verificar si ganó
        if (matchedPairs === totalPairs) {
            endGame();
        }
        
        resetBoard();
    }
    
    // Voltear cartas que no son pareja
    function unflipCards() {
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            resetBoard();
        }, 1000);
    }
    
    // Resetear estado del tablero
    function resetBoard() {
        [firstCard, secondCard, lockBoard] = [null, null, false];
    }
    
    // Actualizar timer
    function updateTimer() {
        elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        memoryTime.textContent = `Tiempo: ${elapsedTime}s`;
    }
    
    // Finalizar juego
    function endGame() {
        // Detener timer
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
        
        // Mostrar mensaje de victoria
        let message = `🎉 ¡Felicidades Amorchito! 🎉\n`;
        message += `Completaste el juego en ${elapsedTime} segundos\n`;
        message += `Con ${moves} movimientos\n`;
        message += `❤ ¡Eres una experta en memoria del amor! ❤`;
        
        memoryScore.innerHTML = message.replace(/\n/g, '<br>');
        memoryScore.style.color = '#4CAF50';
        memoryScore.style.fontSize = '1.1rem';
        memoryScore.style.lineHeight = '1.5';
        
        // Confeti virtual
        createVictoryEffect();
    }
    
    // Efecto de victoria simple
    function createVictoryEffect() {
        const hearts = ['❤', '💖', '💗', '💓', '💕', '💞'];
        
        // Crear algunos corazones flotantes
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
                heart.style.position = 'fixed';
                heart.style.fontSize = Math.random() * 20 + 20 + 'px';
                heart.style.color = '#f50057';
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.top = '-50px';
                heart.style.zIndex = '9999';
                heart.style.pointerEvents = 'none';
                heart.style.opacity = '0.8';
                heart.style.animation = `fall ${Math.random() * 2 + 2}s linear forwards`;
                
                // Agregar animación CSS temporal
                const style = document.createElement('style');
                style.textContent = `
                    @keyframes fall {
                        0% { transform: translateY(0) rotate(0deg); opacity: 0.8; }
                        100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
                    }
                `;
                document.head.appendChild(style);
                
                document.body.appendChild(heart);
                
                // Remover después de la animación
                setTimeout(() => {
                    if (heart.parentNode) {
                        heart.remove();
                    }
                    if (style.parentNode) {
                        style.remove();
                    }
                }, 3000);
            }, i * 100);
        }
    }
    
    // Event Listeners
    restartBtn.addEventListener('click', initGame);
    
    // Inicializar juego al cargar
    setTimeout(() => {
        initGame();
    }, 100);
    
    console.log("Juego de memoria inicializado correctamente");
}





// Función para detener la música cuando se cierra el modal
function stopMusic() {
    console.log("stopMusic llamado"); // Para debug
    if (audioPlayer) {
        console.log("AudioPlayer existe, deteniendo...");
        try {
            audioPlayer.pause();
            audioPlayer.currentTime = 0;
            audioPlayer.src = '';
            
            // También detener todos los elementos de audio en la página por si acaso
            const allAudioElements = document.querySelectorAll('audio');
            allAudioElements.forEach(audio => {
                audio.pause();
                audio.currentTime = 0;
            });
        } catch (error) {
            console.error("Error al detener música:", error);
        }
    } else {
        console.log("AudioPlayer es null, buscando elementos de audio...");
        // Buscar y detener cualquier elemento audio que pueda existir
        const audioElements = document.querySelectorAll('audio');
        audioElements.forEach(audio => {
            audio.pause();
            audio.currentTime = 0;
        });
    }
}
// Configurar event listeners
function setupEventListeners() {
    // Cerrar modal
    modalClose.addEventListener('click', () => {
        stopMusic();
        giftModal.style.display = 'none';
    });
    
    closeModalBtn.addEventListener('click', () => {
        stopMusic();
        giftModal.style.display = 'none';
    });
    
    // Cerrar modal haciendo clic fuera
    giftModal.addEventListener('click', (e) => {
        if (e.target === giftModal) {
            stopMusic();
            giftModal.style.display = 'none';
        }
    });
    
    // Botón "Abrir regalo de hoy"
    openTodayBtn.addEventListener('click', () => {
        if (TEST_MODE) {
            // En modo prueba, mostrar mensaje especial
            alert('¡Modo prueba activado! Puedes abrir cualquier día del 1 al 14. 😊');
        } else if (currentMonth === 1 && currentDay >= 1 && currentDay <= 14) {
            openDay(currentDay);
        } else {
            alert('Hoy no es un día del calendario de San Valentín (solo del 1 al 14 de febrero). Pero puedes abrir cualquier ventana disponible para probar.');
        }
    });
    
    // Botón "Reiniciar calendario"
    resetCalendarBtn.addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres reiniciar el calendario? Se borrarán todas las ventanas abiertas.')) {
            openedDays = [];
            localStorage.removeItem('valentineOpenedDays');
            createCalendar();
            
            // Restaurar el efecto "today" si aplica
            if (currentMonth === 1 && currentDay >= 1 && currentDay <= 14) {
                const todayElement = document.querySelector(`.day[data-day="${currentDay}"]`);
                if (todayElement) {
                    todayElement.classList.add('today');
                }
            }
        }
    });
    
    // Botón "Instrucciones"
    instructionsBtn.addEventListener('click', () => {
        modalTitle.textContent = TEST_MODE ? 
            'Instrucciones - MODO PRUEBA ACTIVADO' : 
            'Instrucciones del Calendario de San Valentín';
        
        const testModeMessage = TEST_MODE ? 
            '<div style="background-color: #f50057; color: white; padding: 10px; border-radius: 5px; margin-bottom: 15px;"><strong>⚠ MODO PRUEBA ACTIVADO:</strong> Todos los días están habilitados para pruebas.</div>' : 
            '';
            
        modalContent.innerHTML = `
            <div class="instructions">
                ${testModeMessage}
                <h3>✨ Cómo usar este calendario de amor:</h3>
                <ul>
                    <li><strong>14 regalos virtuales:</strong> Cada día del 1 al 14 de febrero contiene un regalo especial</li>
                    <li><strong>Abre una ventana cada día:</strong> Haz clic en el número correspondiente al día actual</li>
                    <li><strong>Regalos interactivos:</strong> Algunos regalos tienen juegos y actividades que puedes completar</li>
                    <li><strong>Vales canjeables:</strong> Algunos días incluyen vales que puedes "canjear" con tu pareja</li>
                    <li><strong>Personalización:</strong> Muchos regalos te permiten añadir fotos, nombres y mensajes personales</li>
                    <li><strong>Progreso guardado:</strong> Tu calendario se guarda automáticamente, puedes cerrar y volver más tarde</li>
                    ${TEST_MODE ? '<li><strong>MODO PRUEBA:</strong> Todos los días están habilitados para pruebas</li>' : ''}
                </ul>
                <h3>🎁 Lista de sorpresas incluidos:</h3>
                <ol>
                    <li>Rompecabezas del Amor</li>
                    <li>Primer Vale</li>
                    <li>Carta de Amor Personalizada</li>
                    <li>Playlist del Amor</li>
                    <li>Foto con Marco de Corazones</li>
                    <li>Segundo Vale</li>
                    <li>Poema de Amor</li>
                    <li>Árbol de los Deseos</li>
                    <li>Tercer vale</li>
                    <li>Quiz del Amor</li>
                    <li>Collage de Recuerdos</li>
                    <li>Cuarto Vale</li>
                    <li>Juego de Memoria del Amor</li>
                    <li>¡Feliz San Valentín! (Regalo especial)</li>
                </ol>
                <p style="margin-top: 15px; font-style: italic;">¡Disfruta cada día de este calendario de amor con tu pareja!</p>
            </div>
        `;
        giftModal.style.display = 'flex';
    });
}

// Inicializar cuando se carga la página
document.addEventListener('DOMContentLoaded', init);



// Función para ajustar elementos responsive dinámicamente
function adjustForResponsive() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Ajustar grid del calendario basado en tamaño
    const calendar = document.getElementById('calendar');
    if (calendar) {
        if (width <= 360) {
            // Una columna para móviles muy pequeños
            calendar.style.gridTemplateColumns = '1fr';
            calendar.style.maxWidth = '200px';
        } else if (width <= 480) {
            // Dos columnas para móviles
            calendar.style.gridTemplateColumns = 'repeat(2, 1fr)';
            calendar.style.maxWidth = '280px';
        } else if (width <= 600) {
            // Tres columnas para tablets pequeñas
            calendar.style.gridTemplateColumns = 'repeat(3, 1fr)';
            calendar.style.maxWidth = '400px';
        } else if (width <= 768) {
            // Cuatro columnas para tablets
            calendar.style.gridTemplateColumns = 'repeat(4, 1fr)';
            calendar.style.maxWidth = '500px';
        } else {
            // Siete columnas para desktop
            calendar.style.gridTemplateColumns = 'repeat(7, 1fr)';
            calendar.style.maxWidth = '900px';
        }
    }
    
    // Ajustar tamaño de días
    const days = document.querySelectorAll('.day');
    days.forEach(day => {
        if (width <= 360) {
            day.style.width = '150px';
            day.style.height = '150px';
        } else if (width <= 480) {
            day.style.width = '130px';
            day.style.height = '130px';
        } else {
            day.style.width = '';
            day.style.height = '';
        }
    });
    
    // Ajustar controles para móviles
    const controls = document.querySelector('.controls');
    if (controls && width <= 768) {
        controls.style.flexDirection = 'column';
        controls.style.alignItems = 'center';
    } else if (controls) {
        controls.style.flexDirection = '';
        controls.style.alignItems = '';
    }
    
    // Ajustar modal para móviles pequeños
    const modalContent = document.querySelector('.modal-content');
    if (modalContent && width <= 480) {
        modalContent.style.padding = '15px';
        modalContent.style.width = '95%';
    }
}

// Ejecutar al cargar y al cambiar tamaño
window.addEventListener('load', adjustForResponsive);
window.addEventListener('resize', adjustForResponsive);

// También ejecutar cuando se muestre un modal
const originalShowDayGift = showDayGift;
showDayGift = function(day) {
    originalShowDayGift.call(this, day);
    
    // Ajustar responsive después de mostrar el modal
    setTimeout(adjustForResponsive, 100);
    
    // Ajustar contenido interno del modal si es necesario
    const modal = document.getElementById('gift-modal');
    if (modal && window.innerWidth <= 480) {
        const content = modal.querySelector('#modal-content');
        if (content) {
            // Asegurar que las imágenes sean responsive
            content.querySelectorAll('img').forEach(img => {
                img.style.maxWidth = '100%';
                img.style.height = 'auto';
            });
            
            // Ajustar inputs y botones
            content.querySelectorAll('input, button').forEach(element => {
                element.style.fontSize = '16px'; // Prevenir zoom en iOS
            });
        }
    }

};
