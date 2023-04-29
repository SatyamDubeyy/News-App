import './NandP.css'

function NandP({Nonclick,Pdis,Ndis}) {
    return (
        <>
        <div className="NandPcont">
            <button type="button" class="btn prev btn-dark " disabled={Pdis}>Previous</button>
            <button type="button" class="btn next btn-dark" id="Nexxt" onClick={Nonclick} disabled={Ndis}>Next</button>
            </div>
        </>
    )
}

export default NandP;