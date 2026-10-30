/* =====================================================================
   CONTENUTI DEL SITO — è l'unico file da modificare per cambiare i lavori.
   categoria → progetti → foto.
   - name:  nome che si legge sul sito
   - date:  "AAAA-MM" (mese dello shooting); i progetti si ordinano dal più recente
   - cover: miniatura mostrata sulla cartella (di solito la prima foto)
   - photos: src = foto grande, thumb = miniatura, name = nome file mostrato nell'elenco
   - desk:  true su una foto = compare sulla scrivania della homepage (massimo 3 per progetto; se non ne indichi nessuna ne scelgo 3 a caso)
   - extras (facoltativo, dentro un progetto): link o PDF mostrati accanto alle foto, es.
       "extras": [ {"type": "link", "name": "Intervista", "url": "https://..."}, {"type": "pdf", "name": "Pubblicazione", "url": "pdf/file.pdf"} ]
   Se un progetto non ha foto, il sito mostra dei segnaposto colorati.
   ===================================================================== */
/* Bio, contatti e copyright (pagina "Bio e contatti", barra laterale, piede della home, foto a schermo intero). Lascia "" quello che non vuoi mostrare. */
const SITE = {
  bio_it: "Ruben Quaranta, nato nel 1996 e originario di Mola di Bari, è un fotografo specializzato in fashion e fotografia di studio. Diplomatosi all'ISFCI di Roma nel 2018, ha iniziato il suo percorso professionale nel 2015, distinguendosi per uno stile innovativo e sperimentale. La sua visione creativa si esprime attraverso un uso audace delle luci, composizioni uniche e inquadrature inedite. Ruben esplora costantemente nuove tecniche, integrando elementi di post-produzione e materiali pittorici per avvicinare la fotografia al mondo dell'arte. Attualmente gestisce il suo studio fotografico, Camera Studio, dove continua a sviluppare progetti che fondono estetica e avanguardia.",
  bio_en: "Ruben Quaranta, born in 1996 and originally from Mola di Bari, is a photographer specializing in fashion and studio photography. After graduating from ISFCI in Rome in 2018, he began his professional journey in 2015, standing out for his innovative and experimental style. His creative vision is expressed through bold lighting choices, unique compositions, and unconventional framing. Ruben constantly explores new techniques, incorporating elements of post-production and painterly materials to bridge photography with the world of art. He currently runs his own photography studio, Camera Studio, where he continues to develop projects that blend aesthetics with avant-garde concepts.",
  email: "info@camerastudio.online",
  phone: "+39 392 9808093",
  instagram: "ruben.quaranta",
  copyright_short: "© Ruben Quaranta 2026",
  copyright: "Tutti i diritti sono riservati. Tutti i contenuti del portfolio — grafica, lavoro artistico, concept — sono di proprietà di Ruben Quaranta, Camera Studio, e protetti dal diritto d'autore e dal diritto di proprietà intellettuale in base alla legge sul Diritto d'Autore (Legge 22/04/1941 n. 633). È vietato qualsiasi uso, totale o parziale, dei contenuti inseriti nel presente sito, ivi inclusa la memorizzazione, riproduzione, rielaborazione, diffusione, distribuzione o pubblicazione dei contenuti stessi mediante qualunque piattaforma tecnologica o cartacea, supporto o rete telematica, senza previa autorizzazione scritta della proprietà. © Ruben Quaranta 2026."
};

const CATEGORIES = [
 {
  "name": "Personal project",
  "projects": [
   {
    "name": "Steel Waiting",
    "date": "2025-10",
    "cover": "thumb/personal-project/steel-waiting/SW_01.jpg",
    "photos": [
     {
      "src": "foto/personal-project/steel-waiting/SW_01.jpg",
      "thumb": "thumb/personal-project/steel-waiting/SW_01.jpg",
      "name": "SW_01.jpg",
      "desk": true
     },
     {
      "src": "foto/personal-project/steel-waiting/SW_02.jpg",
      "thumb": "thumb/personal-project/steel-waiting/SW_02.jpg",
      "name": "SW_02.jpg"
     },
     {
      "src": "foto/personal-project/steel-waiting/SW_03.jpg",
      "thumb": "thumb/personal-project/steel-waiting/SW_03.jpg",
      "name": "SW_03.jpg"
     },
     {
      "src": "foto/personal-project/steel-waiting/SW_04.jpg",
      "thumb": "thumb/personal-project/steel-waiting/SW_04.jpg",
      "name": "SW_04.jpg"
     },
     {
      "src": "foto/personal-project/steel-waiting/SW_05.jpg",
      "thumb": "thumb/personal-project/steel-waiting/SW_05.jpg",
      "name": "SW_05.jpg",
      "desk": true
     },
     {
      "src": "foto/personal-project/steel-waiting/SW_06.jpg",
      "thumb": "thumb/personal-project/steel-waiting/SW_06.jpg",
      "name": "SW_06.jpg"
     },
     {
      "src": "foto/personal-project/steel-waiting/SW_07.jpg",
      "thumb": "thumb/personal-project/steel-waiting/SW_07.jpg",
      "name": "SW_07.jpg"
     },
     {
      "src": "foto/personal-project/steel-waiting/SW_08.jpg",
      "thumb": "thumb/personal-project/steel-waiting/SW_08.jpg",
      "name": "SW_08.jpg"
     },
     {
      "src": "foto/personal-project/steel-waiting/SW_09.jpg",
      "thumb": "thumb/personal-project/steel-waiting/SW_09.jpg",
      "name": "SW_09.jpg",
      "desk": true
     },
     {
      "src": "foto/personal-project/steel-waiting/SW_10.jpg",
      "thumb": "thumb/personal-project/steel-waiting/SW_10.jpg",
      "name": "SW_10.jpg"
     },
     {
      "src": "foto/personal-project/steel-waiting/SW_11.jpg",
      "thumb": "thumb/personal-project/steel-waiting/SW_11.jpg",
      "name": "SW_11.jpg"
     },
     {
      "src": "foto/personal-project/steel-waiting/SW_12.jpg",
      "thumb": "thumb/personal-project/steel-waiting/SW_12.jpg",
      "name": "SW_12.jpg"
     }
    ]
   },
   {
    "name": "Flowing",
    "date": "2025-07",
    "cover": "thumb/personal-project/flowing/F_01.jpg",
    "photos": [
     {
      "src": "foto/personal-project/flowing/F_01.jpg",
      "thumb": "thumb/personal-project/flowing/F_01.jpg",
      "name": "F_01.jpg",
      "desk": true
     },
     {
      "src": "foto/personal-project/flowing/F_02.jpg",
      "thumb": "thumb/personal-project/flowing/F_02.jpg",
      "name": "F_02.jpg"
     },
     {
      "src": "foto/personal-project/flowing/F_03.jpg",
      "thumb": "thumb/personal-project/flowing/F_03.jpg",
      "name": "F_03.jpg"
     },
     {
      "src": "foto/personal-project/flowing/F_04.jpg",
      "thumb": "thumb/personal-project/flowing/F_04.jpg",
      "name": "F_04.jpg"
     },
     {
      "src": "foto/personal-project/flowing/F_05.jpg",
      "thumb": "thumb/personal-project/flowing/F_05.jpg",
      "name": "F_05.jpg",
      "desk": true
     },
     {
      "src": "foto/personal-project/flowing/F_06.jpg",
      "thumb": "thumb/personal-project/flowing/F_06.jpg",
      "name": "F_06.jpg"
     },
     {
      "src": "foto/personal-project/flowing/F_07.jpg",
      "thumb": "thumb/personal-project/flowing/F_07.jpg",
      "name": "F_07.jpg"
     },
     {
      "src": "foto/personal-project/flowing/F_08.jpg",
      "thumb": "thumb/personal-project/flowing/F_08.jpg",
      "name": "F_08.jpg"
     },
     {
      "src": "foto/personal-project/flowing/F_09.jpg",
      "thumb": "thumb/personal-project/flowing/F_09.jpg",
      "name": "F_09.jpg",
      "desk": true
     },
     {
      "src": "foto/personal-project/flowing/F_10.jpg",
      "thumb": "thumb/personal-project/flowing/F_10.jpg",
      "name": "F_10.jpg"
     },
     {
      "src": "foto/personal-project/flowing/F_11.jpg",
      "thumb": "thumb/personal-project/flowing/F_11.jpg",
      "name": "F_11.jpg"
     },
     {
      "src": "foto/personal-project/flowing/F_12.jpg",
      "thumb": "thumb/personal-project/flowing/F_12.jpg",
      "name": "F_12.jpg"
     }
    ]
   }
  ]
 },
 {
  "name": "Works",
  "projects": [
   {
    "name": "Dan John Gran Sasso",
    "date": "2025-11",
    "cover": "thumb/works/dan-john-gran-sasso/DJGS_01.jpg",
    "photos": [
     {
      "src": "foto/works/dan-john-gran-sasso/DJGS_01.jpg",
      "thumb": "thumb/works/dan-john-gran-sasso/DJGS_01.jpg",
      "name": "DJGS_01.jpg",
      "desk": true
     },
     {
      "src": "foto/works/dan-john-gran-sasso/DJGS_02.jpg",
      "thumb": "thumb/works/dan-john-gran-sasso/DJGS_02.jpg",
      "name": "DJGS_02.jpg"
     },
     {
      "src": "foto/works/dan-john-gran-sasso/DJGS_03.jpg",
      "thumb": "thumb/works/dan-john-gran-sasso/DJGS_03.jpg",
      "name": "DJGS_03.jpg"
     },
     {
      "src": "foto/works/dan-john-gran-sasso/DJGS_04.jpg",
      "thumb": "thumb/works/dan-john-gran-sasso/DJGS_04.jpg",
      "name": "DJGS_04.jpg"
     },
     {
      "src": "foto/works/dan-john-gran-sasso/DJGS_05.jpg",
      "thumb": "thumb/works/dan-john-gran-sasso/DJGS_05.jpg",
      "name": "DJGS_05.jpg",
      "desk": true
     },
     {
      "src": "foto/works/dan-john-gran-sasso/DJGS_06.jpg",
      "thumb": "thumb/works/dan-john-gran-sasso/DJGS_06.jpg",
      "name": "DJGS_06.jpg"
     },
     {
      "src": "foto/works/dan-john-gran-sasso/DJGS_07.jpg",
      "thumb": "thumb/works/dan-john-gran-sasso/DJGS_07.jpg",
      "name": "DJGS_07.jpg"
     },
     {
      "src": "foto/works/dan-john-gran-sasso/DJGS_08.jpg",
      "thumb": "thumb/works/dan-john-gran-sasso/DJGS_08.jpg",
      "name": "DJGS_08.jpg"
     },
     {
      "src": "foto/works/dan-john-gran-sasso/DJGS_09.jpg",
      "thumb": "thumb/works/dan-john-gran-sasso/DJGS_09.jpg",
      "name": "DJGS_09.jpg",
      "desk": true
     },
     {
      "src": "foto/works/dan-john-gran-sasso/DJGS_10.jpg",
      "thumb": "thumb/works/dan-john-gran-sasso/DJGS_10.jpg",
      "name": "DJGS_10.jpg"
     },
     {
      "src": "foto/works/dan-john-gran-sasso/DJGS_11.jpg",
      "thumb": "thumb/works/dan-john-gran-sasso/DJGS_11.jpg",
      "name": "DJGS_11.jpg"
     },
     {
      "src": "foto/works/dan-john-gran-sasso/DJGS_12.jpg",
      "thumb": "thumb/works/dan-john-gran-sasso/DJGS_12.jpg",
      "name": "DJGS_12.jpg"
     }
    ]
   },
   {
    "name": "Dan John Collina",
    "date": "2025-10",
    "cover": "thumb/works/dj-collina/DJC_01.jpg",
    "photos": [
     {
      "src": "foto/works/dj-collina/DJC_01.jpg",
      "thumb": "thumb/works/dj-collina/DJC_01.jpg",
      "name": "DJC_01.jpg",
      "desk": true
     },
     {
      "src": "foto/works/dj-collina/DJC_02.jpg",
      "thumb": "thumb/works/dj-collina/DJC_02.jpg",
      "name": "DJC_02.jpg"
     },
     {
      "src": "foto/works/dj-collina/DJC_03.jpg",
      "thumb": "thumb/works/dj-collina/DJC_03.jpg",
      "name": "DJC_03.jpg"
     },
     {
      "src": "foto/works/dj-collina/DJC_04.jpg",
      "thumb": "thumb/works/dj-collina/DJC_04.jpg",
      "name": "DJC_04.jpg"
     },
     {
      "src": "foto/works/dj-collina/DJC_05.jpg",
      "thumb": "thumb/works/dj-collina/DJC_05.jpg",
      "name": "DJC_05.jpg",
      "desk": true
     },
     {
      "src": "foto/works/dj-collina/DJC_06.jpg",
      "thumb": "thumb/works/dj-collina/DJC_06.jpg",
      "name": "DJC_06.jpg"
     },
     {
      "src": "foto/works/dj-collina/DJC_07.jpg",
      "thumb": "thumb/works/dj-collina/DJC_07.jpg",
      "name": "DJC_07.jpg"
     },
     {
      "src": "foto/works/dj-collina/DJC_08.jpg",
      "thumb": "thumb/works/dj-collina/DJC_08.jpg",
      "name": "DJC_08.jpg"
     },
     {
      "src": "foto/works/dj-collina/DJC_09.jpg",
      "thumb": "thumb/works/dj-collina/DJC_09.jpg",
      "name": "DJC_09.jpg",
      "desk": true
     },
     {
      "src": "foto/works/dj-collina/DJC_10.jpg",
      "thumb": "thumb/works/dj-collina/DJC_10.jpg",
      "name": "DJC_10.jpg"
     },
     {
      "src": "foto/works/dj-collina/DJC_11.jpg",
      "thumb": "thumb/works/dj-collina/DJC_11.jpg",
      "name": "DJC_11.jpg"
     },
     {
      "src": "foto/works/dj-collina/DJC_12.jpg",
      "thumb": "thumb/works/dj-collina/DJC_12.jpg",
      "name": "DJC_12.jpg"
     }
    ]
   }
  ]
 },
 {
  "name": "Editorial",
  "projects": [
   {
    "name": "La salita actor x VT mag",
    "date": "2026-03",
    "cover": "thumb/editorial/la-salita-actor-x-vt-mag/LSAVM_01.jpg",
    "photos": [
     {
      "src": "foto/editorial/la-salita-actor-x-vt-mag/LSAVM_01.jpg",
      "thumb": "thumb/editorial/la-salita-actor-x-vt-mag/LSAVM_01.jpg",
      "name": "LSAVM_01.jpg",
      "desk": true
     },
     {
      "src": "foto/editorial/la-salita-actor-x-vt-mag/LSAVM_02.jpg",
      "thumb": "thumb/editorial/la-salita-actor-x-vt-mag/LSAVM_02.jpg",
      "name": "LSAVM_02.jpg"
     },
     {
      "src": "foto/editorial/la-salita-actor-x-vt-mag/LSAVM_03.jpg",
      "thumb": "thumb/editorial/la-salita-actor-x-vt-mag/LSAVM_03.jpg",
      "name": "LSAVM_03.jpg"
     },
     {
      "src": "foto/editorial/la-salita-actor-x-vt-mag/LSAVM_04.jpg",
      "thumb": "thumb/editorial/la-salita-actor-x-vt-mag/LSAVM_04.jpg",
      "name": "LSAVM_04.jpg"
     },
     {
      "src": "foto/editorial/la-salita-actor-x-vt-mag/LSAVM_05.jpg",
      "thumb": "thumb/editorial/la-salita-actor-x-vt-mag/LSAVM_05.jpg",
      "name": "LSAVM_05.jpg",
      "desk": true
     },
     {
      "src": "foto/editorial/la-salita-actor-x-vt-mag/LSAVM_06.jpg",
      "thumb": "thumb/editorial/la-salita-actor-x-vt-mag/LSAVM_06.jpg",
      "name": "LSAVM_06.jpg"
     },
     {
      "src": "foto/editorial/la-salita-actor-x-vt-mag/LSAVM_07.jpg",
      "thumb": "thumb/editorial/la-salita-actor-x-vt-mag/LSAVM_07.jpg",
      "name": "LSAVM_07.jpg"
     },
     {
      "src": "foto/editorial/la-salita-actor-x-vt-mag/LSAVM_08.jpg",
      "thumb": "thumb/editorial/la-salita-actor-x-vt-mag/LSAVM_08.jpg",
      "name": "LSAVM_08.jpg"
     },
     {
      "src": "foto/editorial/la-salita-actor-x-vt-mag/LSAVM_09.jpg",
      "thumb": "thumb/editorial/la-salita-actor-x-vt-mag/LSAVM_09.jpg",
      "name": "LSAVM_09.jpg",
      "desk": true
     },
     {
      "src": "foto/editorial/la-salita-actor-x-vt-mag/LSAVM_10.jpg",
      "thumb": "thumb/editorial/la-salita-actor-x-vt-mag/LSAVM_10.jpg",
      "name": "LSAVM_10.jpg"
     },
     {
      "src": "foto/editorial/la-salita-actor-x-vt-mag/LSAVM_11.jpg",
      "thumb": "thumb/editorial/la-salita-actor-x-vt-mag/LSAVM_11.jpg",
      "name": "LSAVM_11.jpg"
     },
     {
      "src": "foto/editorial/la-salita-actor-x-vt-mag/LSAVM_12.jpg",
      "thumb": "thumb/editorial/la-salita-actor-x-vt-mag/LSAVM_12.jpg",
      "name": "LSAVM_12.jpg"
     }
    ]
   },
   {
    "name": "Fede Russo Next Gen",
    "date": "2025-10",
    "cover": "thumb/editorial/fede-russo-next-gen/FRNG_01.jpg",
    "photos": [
     {
      "src": "foto/editorial/fede-russo-next-gen/FRNG_01.jpg",
      "thumb": "thumb/editorial/fede-russo-next-gen/FRNG_01.jpg",
      "name": "FRNG_01.jpg",
      "desk": true
     },
     {
      "src": "foto/editorial/fede-russo-next-gen/FRNG_02.jpg",
      "thumb": "thumb/editorial/fede-russo-next-gen/FRNG_02.jpg",
      "name": "FRNG_02.jpg"
     },
     {
      "src": "foto/editorial/fede-russo-next-gen/FRNG_03.jpg",
      "thumb": "thumb/editorial/fede-russo-next-gen/FRNG_03.jpg",
      "name": "FRNG_03.jpg"
     },
     {
      "src": "foto/editorial/fede-russo-next-gen/FRNG_04.jpg",
      "thumb": "thumb/editorial/fede-russo-next-gen/FRNG_04.jpg",
      "name": "FRNG_04.jpg"
     },
     {
      "src": "foto/editorial/fede-russo-next-gen/FRNG_05.jpg",
      "thumb": "thumb/editorial/fede-russo-next-gen/FRNG_05.jpg",
      "name": "FRNG_05.jpg",
      "desk": true
     },
     {
      "src": "foto/editorial/fede-russo-next-gen/FRNG_06.jpg",
      "thumb": "thumb/editorial/fede-russo-next-gen/FRNG_06.jpg",
      "name": "FRNG_06.jpg"
     },
     {
      "src": "foto/editorial/fede-russo-next-gen/FRNG_07.jpg",
      "thumb": "thumb/editorial/fede-russo-next-gen/FRNG_07.jpg",
      "name": "FRNG_07.jpg"
     },
     {
      "src": "foto/editorial/fede-russo-next-gen/FRNG_08.jpg",
      "thumb": "thumb/editorial/fede-russo-next-gen/FRNG_08.jpg",
      "name": "FRNG_08.jpg"
     },
     {
      "src": "foto/editorial/fede-russo-next-gen/FRNG_09.jpg",
      "thumb": "thumb/editorial/fede-russo-next-gen/FRNG_09.jpg",
      "name": "FRNG_09.jpg",
      "desk": true
     },
     {
      "src": "foto/editorial/fede-russo-next-gen/FRNG_10.jpg",
      "thumb": "thumb/editorial/fede-russo-next-gen/FRNG_10.jpg",
      "name": "FRNG_10.jpg"
     },
     {
      "src": "foto/editorial/fede-russo-next-gen/FRNG_11.jpg",
      "thumb": "thumb/editorial/fede-russo-next-gen/FRNG_11.jpg",
      "name": "FRNG_11.jpg"
     },
     {
      "src": "foto/editorial/fede-russo-next-gen/FRNG_12.jpg",
      "thumb": "thumb/editorial/fede-russo-next-gen/FRNG_12.jpg",
      "name": "FRNG_12.jpg"
     }
    ]
   }
  ]
 },
 {
  "name": "Music",
  "projects": [
   {
    "name": "Alice",
    "date": "2025-10",
    "cover": "thumb/music/alice/A_01.jpg",
    "photos": [
     {
      "src": "foto/music/alice/A_01.jpg",
      "thumb": "thumb/music/alice/A_01.jpg",
      "name": "A_01.jpg",
      "desk": true
     },
     {
      "src": "foto/music/alice/A_02.jpg",
      "thumb": "thumb/music/alice/A_02.jpg",
      "name": "A_02.jpg"
     },
     {
      "src": "foto/music/alice/A_03.jpg",
      "thumb": "thumb/music/alice/A_03.jpg",
      "name": "A_03.jpg"
     },
     {
      "src": "foto/music/alice/A_04.jpg",
      "thumb": "thumb/music/alice/A_04.jpg",
      "name": "A_04.jpg"
     },
     {
      "src": "foto/music/alice/A_05.jpg",
      "thumb": "thumb/music/alice/A_05.jpg",
      "name": "A_05.jpg",
      "desk": true
     },
     {
      "src": "foto/music/alice/A_06.jpg",
      "thumb": "thumb/music/alice/A_06.jpg",
      "name": "A_06.jpg"
     },
     {
      "src": "foto/music/alice/A_07.jpg",
      "thumb": "thumb/music/alice/A_07.jpg",
      "name": "A_07.jpg"
     },
     {
      "src": "foto/music/alice/A_08.jpg",
      "thumb": "thumb/music/alice/A_08.jpg",
      "name": "A_08.jpg"
     },
     {
      "src": "foto/music/alice/A_09.jpg",
      "thumb": "thumb/music/alice/A_09.jpg",
      "name": "A_09.jpg",
      "desk": true
     },
     {
      "src": "foto/music/alice/A_10.jpg",
      "thumb": "thumb/music/alice/A_10.jpg",
      "name": "A_10.jpg"
     },
     {
      "src": "foto/music/alice/A_11.jpg",
      "thumb": "thumb/music/alice/A_11.jpg",
      "name": "A_11.jpg"
     },
     {
      "src": "foto/music/alice/A_12.jpg",
      "thumb": "thumb/music/alice/A_12.jpg",
      "name": "A_12.jpg"
     }
    ]
   },
   {
    "name": "Kinder Garden",
    "date": "2024-05",
    "cover": "thumb/music/kinder-garden/KG_01.jpg",
    "photos": [
     {
      "src": "foto/music/kinder-garden/KG_01.jpg",
      "thumb": "thumb/music/kinder-garden/KG_01.jpg",
      "name": "KG_01.jpg",
      "desk": true
     },
     {
      "src": "foto/music/kinder-garden/KG_02.jpg",
      "thumb": "thumb/music/kinder-garden/KG_02.jpg",
      "name": "KG_02.jpg"
     },
     {
      "src": "foto/music/kinder-garden/KG_03.jpg",
      "thumb": "thumb/music/kinder-garden/KG_03.jpg",
      "name": "KG_03.jpg"
     },
     {
      "src": "foto/music/kinder-garden/KG_04.jpg",
      "thumb": "thumb/music/kinder-garden/KG_04.jpg",
      "name": "KG_04.jpg"
     },
     {
      "src": "foto/music/kinder-garden/KG_05.jpg",
      "thumb": "thumb/music/kinder-garden/KG_05.jpg",
      "name": "KG_05.jpg",
      "desk": true
     },
     {
      "src": "foto/music/kinder-garden/KG_06.jpg",
      "thumb": "thumb/music/kinder-garden/KG_06.jpg",
      "name": "KG_06.jpg"
     },
     {
      "src": "foto/music/kinder-garden/KG_07.jpg",
      "thumb": "thumb/music/kinder-garden/KG_07.jpg",
      "name": "KG_07.jpg"
     },
     {
      "src": "foto/music/kinder-garden/KG_08.jpg",
      "thumb": "thumb/music/kinder-garden/KG_08.jpg",
      "name": "KG_08.jpg"
     },
     {
      "src": "foto/music/kinder-garden/KG_09.jpg",
      "thumb": "thumb/music/kinder-garden/KG_09.jpg",
      "name": "KG_09.jpg",
      "desk": true
     },
     {
      "src": "foto/music/kinder-garden/KG_10.jpg",
      "thumb": "thumb/music/kinder-garden/KG_10.jpg",
      "name": "KG_10.jpg"
     },
     {
      "src": "foto/music/kinder-garden/KG_11.jpg",
      "thumb": "thumb/music/kinder-garden/KG_11.jpg",
      "name": "KG_11.jpg"
     },
     {
      "src": "foto/music/kinder-garden/KG_12.jpg",
      "thumb": "thumb/music/kinder-garden/KG_12.jpg",
      "name": "KG_12.jpg"
     }
    ]
   }
  ]
 },
 {
  "name": "Portrait",
  "projects": [
   {
    "name": "India",
    "date": "2025-02",
    "cover": "thumb/portrait/india/I_01.jpg",
    "photos": [
     {
      "src": "foto/portrait/india/I_01.jpg",
      "thumb": "thumb/portrait/india/I_01.jpg",
      "name": "I_01.jpg",
      "desk": true
     },
     {
      "src": "foto/portrait/india/I_02.jpg",
      "thumb": "thumb/portrait/india/I_02.jpg",
      "name": "I_02.jpg"
     },
     {
      "src": "foto/portrait/india/I_03.jpg",
      "thumb": "thumb/portrait/india/I_03.jpg",
      "name": "I_03.jpg"
     },
     {
      "src": "foto/portrait/india/I_04.jpg",
      "thumb": "thumb/portrait/india/I_04.jpg",
      "name": "I_04.jpg"
     },
     {
      "src": "foto/portrait/india/I_05.jpg",
      "thumb": "thumb/portrait/india/I_05.jpg",
      "name": "I_05.jpg",
      "desk": true
     },
     {
      "src": "foto/portrait/india/I_06.jpg",
      "thumb": "thumb/portrait/india/I_06.jpg",
      "name": "I_06.jpg"
     },
     {
      "src": "foto/portrait/india/I_07.jpg",
      "thumb": "thumb/portrait/india/I_07.jpg",
      "name": "I_07.jpg"
     },
     {
      "src": "foto/portrait/india/I_08.jpg",
      "thumb": "thumb/portrait/india/I_08.jpg",
      "name": "I_08.jpg"
     },
     {
      "src": "foto/portrait/india/I_09.jpg",
      "thumb": "thumb/portrait/india/I_09.jpg",
      "name": "I_09.jpg",
      "desk": true
     },
     {
      "src": "foto/portrait/india/I_10.jpg",
      "thumb": "thumb/portrait/india/I_10.jpg",
      "name": "I_10.jpg"
     },
     {
      "src": "foto/portrait/india/I_11.jpg",
      "thumb": "thumb/portrait/india/I_11.jpg",
      "name": "I_11.jpg"
     },
     {
      "src": "foto/portrait/india/I_12.jpg",
      "thumb": "thumb/portrait/india/I_12.jpg",
      "name": "I_12.jpg"
     }
    ]
   }
  ]
 }
];
