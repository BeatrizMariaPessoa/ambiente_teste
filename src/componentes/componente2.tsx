import {ChangeEvent, useState} from 'react'
function Componente2() {
  const [arquivo, setArquivo] = useState<File | null>(null)
  function InserirArquivo(event: ChangeEvent<HTMLInputElement>) {
    const {files} = event.currentTarget

    if (!files) {
      return
    }
    const selectFile = files[0]

    setArquivo(selectFile)
  }

  return (
    <>
    <div className="Componente">
      <h2>Componente 2</h2>
      <form style={{display: 'flex', flexDirection: 'column'}}>
        <label>{arquivo ? 'Já há um vídeo selecionado!' : ('Selecione um vídeo:')}</label>
        <input type="file" accept='video/mp4' onChange={InserirArquivo}/>
      </form>
    </div>
    </>
  )
}

export default Componente2
