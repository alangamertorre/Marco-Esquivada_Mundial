const cajabotones = document.querySelector('.cajabotones');
const svg1 = cajabotones.querySelector('.b1');
const svg2 = cajabotones.querySelector('.b2');
const svg4 = cajabotones.querySelector('.b4');
const svg5 = cajabotones.querySelector('.b5');
const svg6 = cajabotones.querySelector('.b6')

// ---------- SVG SETUP ----------
const SVG_NS = "http://www.w3.org/2000/svg";

// Helpers reutilizables
function crearSVG(w,h,view="0 0 24 24"){
    const s = document.createElementNS(SVG_NS,"svg");
    s.setAttribute("width",w);
    s.setAttribute("height",h);
    s.setAttribute("viewBox",view);
    s.style.cursor="pointer";
    return s;
}

function path(d,stroke="white",sw=2,fill="none"){
    const p=document.createElementNS(SVG_NS,"path");
    p.setAttribute("d",d);
    p.setAttribute("stroke",stroke);
    p.setAttribute("stroke-width",sw);
    p.setAttribute("fill",fill);
    p.setAttribute("stroke-linecap","round");
    p.setAttribute("stroke-linejoin","round");
    return p;
}

function circle(cx,cy,r,stroke="white",sw=2,fill="none"){
    const c=document.createElementNS(SVG_NS,"circle");
    c.setAttribute("cx",cx);
    c.setAttribute("cy",cy);
    c.setAttribute("r",r);
    c.setAttribute("stroke",stroke);
    c.setAttribute("stroke-width",sw);
    c.setAttribute("fill",fill);
    return c;
}

function rect(x,y,w,h,fill="white"){
    const r=document.createElementNS(SVG_NS,"rect");
    r.setAttribute("x",x);
    r.setAttribute("y",y);
    r.setAttribute("width",w);
    r.setAttribute("height",h);
    r.setAttribute("fill",fill);
    return r;
}

function dot(cx,cy,r=2){
    const d=document.createElementNS(SVG_NS,"circle");
    d.setAttribute("cx",cx);
    d.setAttribute("cy",cy);
    d.setAttribute("r",r);
    d.setAttribute("fill","white");
    return d;
}

//////////////////////////////////////////////////
// 🎯 B1 FULLSCREEN
//////////////////////////////////////////////////

const fullscreenIcon = crearSVG(24,24);

fullscreenIcon.append(
    path("M4 9V4H9", "white",1),
    path("M15 4H20V9","white",1),
    path("M20 15V20H15","white",1),
    path("M9 20H4V15","white",1)
);

svg1.appendChild(fullscreenIcon);

//////////////////////////////////////////////////
// 🐞 B2 BUG
//////////////////////////////////////////////////

const bugIcon = crearSVG(30,30);

bugIcon.append(
    path("M9 4 L7 2", "white",1),
    path("M15 4 L17 2","white",1),
    circle(12,13,4,"white",1),
    circle(12,8,2,"white",1),
    path("M8 13 L4 11","white",1),
    path("M8 15 L4 17","white",1),
    path("M16 13 L20 11","white",1),
    path("M16 15 L20 17","white",1)
);
bugIcon.style.top = '4px'
svg2.appendChild(bugIcon);

//////////////////////////////////////////////////
// 💻 B4 TERMINAL
//////////////////////////////////////////////////

const terminalIcon = crearSVG(26,26);

terminalIcon.append(
    path("M3 4 H21 V20 H3 Z"),
    path("M6 9 L10 13"),
    path("M6 13 L10 9"),
    path("M6 17 H12")
);

svg4.appendChild(terminalIcon);

//////////////////////////////////////////////////
// 🎮 B5 GAMEPAD SIMPLIFICADO
//////////////////////////////////////////////////

// Crear SVG más alto
const gameIcon = crearSVG(47,47,"0 0 63 47"); // ancho 64, alto 48

// Cuerpo del gamepad (simplificado)
const bodyPath = path(
  "M8 16 C8 8 16 8 16 16 L48 16 C48 8 56 8 56 16 C56 36 48 40 32 40 C16 40 8 36 8 16 Z",
  "none",0,"white"
);
gameIcon.appendChild(bodyPath);

// D-pad (cruz direccional)
gameIcon.append(
  rect(16,20,8,2),  // horizontal
  rect(19,17,2,8)   // vertical
);

// Botones derecha
gameIcon.append(
  dot(44,20),
  dot(48,24),
  dot(40,24),
  dot(44,28),
);

gameIcon.style.transform = "rotate(180deg)";
gameIcon.style.transformOrigin = "50% 50%"; // gira desde el centro

// Meter en contenedor
svg5.appendChild(gameIcon);

//////////////////////////////////////////////////
//  B6 CREDITOS
//////////////////////////////////////////////////

function creditIcon(){
  const svg = document.createElementNS(SVG_NS,"svg");
  svg.setAttribute("viewBox","0 0 64 64");
  svg.setAttribute("width","36");
  svg.setAttribute("height","36");

  const rect = document.createElementNS(SVG_NS,"rect");
  rect.setAttribute("x",8);
  rect.setAttribute("y",16);
  rect.setAttribute("width",48);
  rect.setAttribute("height",32);
  rect.setAttribute("rx",6);
  rect.setAttribute("fill","none");
  rect.setAttribute("stroke","white");
  rect.setAttribute("stroke-width",2);

  function line(y,w){
    const l=document.createElementNS(SVG_NS,"line");
    l.setAttribute("x1",18);
    l.setAttribute("y1",y);
    l.setAttribute("x2",18+w);
    l.setAttribute("y2",y);
    l.setAttribute("stroke","white");
    l.setAttribute("stroke-width",2);
    l.setAttribute("stroke-linecap","round");
    return l;
  }

  const star=document.createElementNS(SVG_NS,"polygon");
  star.setAttribute(
    "points",
    "32,6 34,12 40,12 35,16 37,22 32,18 27,22 29,16 24,12 30,12"
  );
  star.setAttribute("fill","white");

  svg.append(rect, line(26,28), line(34,22), line(42,18), star);
  return svg;
}

// ✅ crear instancia y añadir
const svg6Icon = creditIcon();
svg6.appendChild(svg6Icon);




