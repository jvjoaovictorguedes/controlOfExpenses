

export default function ContainerInsert() {
  return (
    <div >
      <h1 className="text-6xl text-start ml-52 mt-3 rounded-[9999px] bg-grayColor h-32 w-32 items-center flex text-white">Despesas</h1>
      <form className=' m-auto w-[1000px] mt-5 flex-col flex'>
        <div className='p-5 text-2xl'>
          <label className="p-2 bg-slate-100 rounded-xl mr-5 shadow-shadowBallon" htmlFor="value">Valor:</label>
          <input className="rounded-xl p-2 shadow-shadowBallon" type="number" name="value" id="value" placeholder="Insira o valor" />
        </div>
        <div className='p-5 text-2xl'>
          <label className="p-2 bg-slate-100 rounded-xl mr-5 shadow-shadowBallon" htmlFor="expense">Despesa:</label>
          <input className="rounded-xl p-2 shadow-shadowBallon" type="text" name="expense" id="expense" placeholder="Insira a despesa" />
        </div>
        <div className='p-5 text-2xl'>
          <label className="p-2 bg-slate-100 rounded-xl mr-5 shadow-shadowBallon" htmlFor="reason">Motivo:</label>
          <input className="rounded-xl p-2 shadow-shadowBallon" type="text" name="reason" id="reason" placeholder="Insira o motivo" />
        </div>
        <div className='p-5 text-2xl flex gap-x-6'>
          <label className="p-2 bg-grayColor rounded-xl shadow-shadowBallon text-white" htmlFor="dateInitial">Data inicial:</label>
          <input className="rounded-xl p-2 shadow-shadowBallon bg-grayColor text-white" type="date" name="dateInitial" id="dateInitial" />
          <label className="p-2 rounded-xl shadow-shadowBallon bg-grayColor text-white" htmlFor="dateFinal">Data Final:</label>
          <input className="rounded-xl p-2 shadow-shadowBallon bg-grayColor text-white" type="date" name="dateFinal" id="dateFinal" />
        </div>
        <button className='text-2xl bg-relatorioColor mr-auto ml-5 rounded-lg p-2 hover:bg-slate-700 hover:text-white shadow-shadowBallon' type="submit">Gerar Relatório</button>
      </form>
    </div>
  )
}