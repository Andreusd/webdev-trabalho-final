import axios from 'axios'

const host = "https://apibrasileirao-production.up.railway.app"

export const getPartidas = async (rodada, temporada) => await axios
.get(`${host}/api/Brasileirao/partidas?rodada=${rodada}&temporada=${temporada}`)
.catch(err=>console.log(err))

export const getTimes = async () => await axios
.get(`${host}/api/Brasileirao/times`)
.catch(err=>console.log(err))

export const getJogadores = async () => await axios
.get(`${host}/api/Brasileirao/jogadores`)

export const getGolsByPartida = async (partidaId) => await axios
.get(`${host}/api/Brasileirao/gols/${partidaId}`)
.catch(err=>console.log(err))

export const getGolsByTemporada = async (temporada, clube) => await axios
.get(`${host}/api/Brasileirao/gols?temporada=${temporada}&clube=${clube}`)
.catch(err=>console.log(err))

export const getCartoes = async (partidaId) => await axios
.get(`${host}/api/Brasileirao/cartoes/${partidaId}`)
.catch(err=>console.log(err))

export const postPartida = async (payload) => {
    return await axios
    .post(`${host}/api/Brasileirao/partida`, payload)
    .catch(err=>console.log(err))
}

// partidas partidas/:id times jogadores/:time gols/:id cartoes/:idpartida?clube=clube