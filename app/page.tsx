"use client"

import { Bell, Box, ChevronRight, Clock3, MapPin, PackageCheck, Plus, Truck, Users } from "lucide-react"

const deliveries = [
  { id: "#BIM-2841", route: "Cocody → Plateau", status: "En cours", time: "12 min", courier: "Koffi A." },
  { id: "#BIM-2838", route: "Marcory → Treichville", status: "Livrée", time: "09:42", courier: "Awa K." },
  { id: "#BIM-2834", route: "Yopougon → Cocody", status: "En attente", time: "09:18", courier: "—" },
]

function Stat({ icon: Icon, label, value, note }: { icon: any; label: string; value: string; note: string }) {
  return <div className="card stat"><div className="icon"><Icon size={19}/></div><div><p>{label}</p><strong>{value}</strong><span>{note}</span></div></div>
}

export default function Page() {
  return (
    <main className="shell">
      <aside className="sidebar">
        <div className="brand"><span className="brandMark">b</span><b>bimbim</b><small>ADMIN</small></div>
        <nav><a className="active"><Box size={18}/> Dashboard</a><a><PackageCheck size={18}/> Livraisons</a><a><Truck size={18}/> Coursiers</a><a><Users size={18}/> Utilisateurs</a></nav>
        <div className="sidebarBottom"><a>Paramètres</a><div className="profile"><div className="avatar">CS</div><div><b>Campbell</b><span>Administrateur</span></div></div></div>
      </aside>
      <section className="content">
        <header><div><p className="eyebrow">VENDREDI 28 AOÛT 2026</p><h1>Bonjour Campbell</h1><p className="muted">Voici ce qui se passe sur Bimbim aujourd’hui.</p></div><div className="actions"><button className="iconBtn"><Bell size={19}/><i/></button><button className="primary"><Plus size={18}/> Nouvelle livraison</button></div></header>
        <div className="stats"><Stat icon={PackageCheck} label="Livraisons aujourd’hui" value="128" note="+12,4% vs hier"/><Stat icon={Truck} label="En cours" value="24" note="7 nécessitent une attention"/><Stat icon={Users} label="Coursiers actifs" value="46" note="82 au total"/><Stat icon={Clock3} label="Temps moyen" value="34 min" note="−6 min cette semaine"/></div>
        <div className="grid">
          <div className="card deliveries"><div className="sectionHead"><div><h2>Livraisons récentes</h2><p>Suivez l’activité en temps réel.</p></div><button className="link">Voir tout <ChevronRight size={16}/></button></div><div className="table">{deliveries.map(d=><div className="row" key={d.id}><div className="id">{d.id}</div><div className="route"><MapPin size={15}/>{d.route}</div><div><span className={'status '+d.status.replaceAll(' ','-').toLowerCase()}>{d.status}</span></div><div className="time">{d.time}</div><div className="courier">{d.courier}</div><ChevronRight size={16} className="chev"/></div>)}</div></div>
          <div className="card attention"><div className="sectionHead"><div><h2>À surveiller</h2><p>Actions qui demandent votre attention.</p></div></div><div className="alert"><div className="alertIcon">!</div><div><b>7 livraisons en attente</b><span>Depuis plus de 20 minutes</span></div><ChevronRight size={17}/></div><div className="alert"><div className="alertIcon">!</div><div><b>3 coursiers hors ligne</b><span>Sur des zones à forte demande</span></div><ChevronRight size={17}/></div><div className="miniMap"><MapPin size={20}/><span>Activité en direct</span><b>46 coursiers</b></div></div>
        </div>
      </section>
    </main>
  )
}
