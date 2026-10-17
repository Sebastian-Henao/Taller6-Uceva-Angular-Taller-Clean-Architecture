import { Jungler } from "../core/domain/models/jungler.model";

export const JUNGLERS_MOCK: Jungler[] = [
  {
    id: 1,
    name: "Lee Sin",
    title: "El Monje Ciego",
    role: "Luchador",
    difficulty: "Alta",
    region: "Jonia",
    description: "Un maestro de las artes marciales de Jonia que canaliza la esencia del dragón.",
    mainAbilities: "Onda Sónica, Salvaguarda, Tempestad, Ira del Dragón"
  },
  {
    id: 2,
    name: "Warwick",
    title: "La Furia Desatada de Zaun",
    role: "Luchador",
    difficulty: "Baja",
    region: "Zaun",
    description: "Un monstruo transformado mediante experimentos que caza en Zaun.",
    mainAbilities: "Fauce Hambrienta, Cacería Sangrienta, Aullido Primigenio, Opresión Infinita"
  },
  {
    id: 3,
    name: "Vi",
    title: "La Defensora de Piltóver",
    role: "Luchador",
    difficulty: "Media",
    region: "Piltover",
    description: "Una mujer impulsiva armada con guanteletes hextech gigantescos.",
    mainAbilities: "Rompebóvedas, Escudo Pasivo, Golpes Abollantes, Asalto Incansable"
  }
];

export const ALL_20_JUNGLERS: Jungler[] = [
  {
    id: 1,
    name: "Lee Sin",
    title: "El Monje Ciego",
    role: "Luchador",
    difficulty: "Alta",
    region: "Jonia",
    description: "Un maestro de las artes marciales de Jonia que canaliza la esencia del dragón para superar cualquier desafío.",
    mainAbilities: "Onda Sónica, Salvaguarda, Tempestad, Ira del Dragón"
  },
  {
    id: 2,
    name: "Warwick",
    title: "La Furia Desatada de Zaun",
    role: "Luchador",
    difficulty: "Baja",
    region: "Zaun",
    description: "Un monstruo transformado mediante agonizantes experimentos que caza criminales por los callejones oscuros de Zaun.",
    mainAbilities: "Fauce Hambrienta, Cacería Sangrienta, Aullido Primigenio, Opresión Infinita"
  },
  {
    id: 3,
    name: "Vi",
    title: "La Defensora de Piltóver",
    role: "Luchador",
    difficulty: "Media",
    region: "Piltover",
    description: "Una mujer impulsiva y de armas tomar que patrulla las calles de Piltóver con sus masivos guanteletes hextech.",
    mainAbilities: "Rompebóvedas, Escudo Pasivo, Golpes Abollantes, Asalto Incansable"
  },
  {
    id: 4,
    name: "Jarvan IV",
    title: "El Ejemplo de Demacia",
    role: "Tanque",
    difficulty: "Media",
    region: "Demacia",
    description: "El heredero al trono de Demacia que lidera a sus ejércitos con valor inquebrantable portando su formidable estandarte.",
    mainAbilities: "Golpe del Dragón, Protección Áurea, Estandarte Demaciano, Cataclismo"
  },
  {
    id: 5,
    name: "Sejuani",
    title: "La Ira del Invierno",
    role: "Tanque",
    difficulty: "Media",
    region: "Freljord",
    description: "Feroz comandante de la Garra Invernal que monta a lomos de su drúvask Bristle infundiendo terror gélido.",
    mainAbilities: "Asalto Ártico, Ira del Invierno, Congelación, Prisión Glacial"
  },
  {
    id: 6,
    name: "Zac",
    title: "El Arma Secreta",
    role: "Tanque",
    difficulty: "Media",
    region: "Zaun",
    description: "El producto de un experimento zaunita que cobró consciencia y bondad, capaz de estirarse y rebotar dinámicamente.",
    mainAbilities: "Golpes Estirados, Materia Inestable, Honda Elástica, ¡Rebotemos!"
  },
  {
    id: 7,
    name: "Amumu",
    title: "La Momia Triste",
    role: "Tanque",
    difficulty: "Baja",
    region: "Shurima",
    description: "Una solitaria alma milenaria de Shurima condenada a vagar por la eternidad en busca de un verdadero amigo.",
    mainAbilities: "Lanzamiento de Vendas, Desesperación, Berrinche, Maldición de la Momia Triste"
  },
  {
    id: 8,
    name: "Master Yi",
    title: "El Espadachín Wuju",
    role: "Asesino",
    difficulty: "Baja",
    region: "Jonia",
    description: "El último practicante vivo del arte ancestral Wuju, capaz de diezmar escuadrones a velocidades imperceptibles.",
    mainAbilities: "Golpe Alfa, Meditación, Estilo Wuju, Imparable"
  },
  {
    id: 9,
    name: "Kha'Zix",
    title: "El Saqueador del Vacío",
    role: "Asesino",
    difficulty: "Media",
    region: "El Vacio",
    description: "Un despiadado depredador del Vacío que evoluciona constantemente devorando las fortalezas de sus presas.",
    mainAbilities: "Saborea su Miedo, Púas del Vacío, Salto, Ataque del Vacío"
  },
  {
    id: 10,
    name: "Evelynn",
    title: "El Abrazo de la Agonía",
    role: "Asesino",
    difficulty: "Media",
    region: "Runaterra",
    description: "Un demonio ancestral que asume forma seductora para atraer a sus víctimas y deleitarse con su sufrimiento.",
    mainAbilities: "Púa de Odio, Seducción, Latigazo, Última Caricia"
  },
  {
    id: 11,
    name: "Shaco",
    title: "El Bufón Siniestro",
    role: "Asesino",
    difficulty: "Alta",
    region: "Runaterra",
    description: "Un macabro muñeco encantado que acecha con cajas sorpresa y clones ilusorios asesinando entre risas burlonas.",
    mainAbilities: "Engaño, Caja Sorpresa, Veneno de Doble Filo, Alucinación"
  },
  {
    id: 12,
    name: "Kayn",
    title: "El Segador Sombrío",
    role: "Asesino",
    difficulty: "Media",
    region: "Jonia",
    description: "Un prodigio de la magia sombría que libra una batalla interna de voluntades contra el arma oscura Rhaast.",
    mainAbilities: "Corte Rápido, Alcance de Cuchilla, Pasaje Sombrío, Transgresión del Umbral"
  },
  {
    id: 13,
    name: "Elise",
    title: "La Reina de las Espinas",
    role: "Mago",
    difficulty: "Alta",
    region: "Islas de la Sombra",
    description: "Una letal sacerdotisa que cambia de forma humana a imponente araña voraz consagrada al Dios Araña.",
    mainAbilities: "Neurotoxina, Araña Volátil, Rapel, Forma de Araña"
  },
  {
    id: 14,
    name: "Nidalee",
    title: "La Cazadora Salvaje",
    role: "Mago",
    difficulty: "Alta",
    region: "Shurima",
    description: "Criada en la profundidad de la jungla salvaje, esta cazadora domina la lanza certera y la fiera forma felina.",
    mainAbilities: "Jabalina, Emboscada, Tensión Primaria, Aspecto del Felino"
  },
  {
    id: 15,
    name: "Fiddlesticks",
    title: "El Terror Ancestral",
    role: "Mago",
    difficulty: "Media",
    region: "Runaterra",
    description: "La encarnación primigenia del miedo que se alimenta de la desesperación de quienes oyen su macabro graznido.",
    mainAbilities: "Terror, Cosecha Abundante, Viento Siniestro, Tormenta de Cuervos"
  },
  {
    id: 16,
    name: "Lillia",
    title: "El Brote Tímido",
    role: "Mago",
    difficulty: "Media",
    region: "Jonia",
    description: "Una cervatilla faérica de Jonia que recolecta los sueños de los mortales para nutrir su árbol materno.",
    mainAbilities: "Golpes Florecientes, ¡Cuidado!, Semilla Espiral, Canción de Cuna Rítmica"
  },
  {
    id: 17,
    name: "Graves",
    title: "El Forajido",
    role: "Tirador",
    difficulty: "Media",
    region: "Aguas Turbias",
    description: "Un veterano mercenario armado con una escopeta de doble cañón adaptada para despejar la jungla con potencia implacable.",
    mainAbilities: "Fin de la Trayectoria, Pantalla de Humo, Disparo Veloz, Daño Colateral"
  },
  {
    id: 18,
    name: "Kindred",
    title: "Los Cazadores Eternos",
    role: "Tirador",
    difficulty: "Media",
    region: "Runaterra",
    description: "La doble esencia de la muerte: la certera flecha de Oveja para quienes aceptan su destino y los colmillos de Lobo.",
    mainAbilities: "Danza de Flechas, Frenesí de Lobo, Terror Creciente, Respiro de Cordera"
  },
  {
    id: 19,
    name: "Hecarim",
    title: "La Sombra de la Guerra",
    role: "Luchador",
    difficulty: "Media",
    region: "Islas de la Sombra",
    description: "Un espectral centauro acorazado que lidera una caballería fantasmal arrasando con devastadora velocidad.",
    mainAbilities: "Ataque Furioso, Espíritu de la Devastación, Carga Devastadora, Avalancha de Sombras"
  },
  {
    id: 20,
    name: "Nocturne",
    title: "La Pesadilla Eterna",
    role: "Asesino",
    difficulty: "Baja",
    region: "Runaterra",
    description: "Una amalgama demoníaca extraída de las pesadillas más oscuras que sume al mapa en oscuridad absoluta.",
    mainAbilities: "Portador del Anochecer, Velo de la Penumbra, Filo Olvidado, Paranoia"
  }
];
