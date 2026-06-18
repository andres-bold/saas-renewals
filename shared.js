/* ── DATOS ── */
const ROWS = [
  { id:'345', nombre:'Restaurante Josefina',       prob:'Alto',  valor:'$2.400.000', plan:'Profesional Restaurante',  vertical:'Restaurante', antiguedad:'23 meses', diasUltima:3,  venceDia:12, facturas:120,  comprobantes:345,  clasif:'Grande',  estado:'proceso', pipeline:'En negociación',    fechaGestion:null,       importante:true,  comentarios:[{autor:'Ana García',iniciales:'AG',fecha:'24 may 2026',texto:'Cliente muy interesado, tiene presupuesto aprobado. Confirmar llamada para el viernes.'},{autor:'Luis Pérez',iniciales:'LP',fecha:'27 may 2026',texto:'Envié propuesta actualizada con descuento del 5%. Espero respuesta.'},{autor:'Ramiro Guerrero',iniciales:'RG',fecha:'04 jun 2026',texto:'Programar llamada de seguimiento con el dueño para revisar propuesta.',alerta:{fechaAlerta:'2026-06-06',hora:'10:00 am',estado:'realizado',comentarioResolucion:'Hablé con el dueño, muy interesado. Acepta la propuesta con el descuento del 5%.'}},{autor:'Ramiro Guerrero',iniciales:'RG',fecha:'07 jun 2026',texto:'Confirmar firma del contrato esta semana.',alerta:{fechaAlerta:'2026-06-11',hora:'3:00 pm',estado:'pendiente'}}] },
  { id:'512', nombre:'Tienda Don Álvaro',           prob:'Medio', valor:'$960.000',  plan:'Emprendedor Retail',        vertical:'Retail',       antiguedad:'8 meses',  diasUltima:12, venceDia:18, facturas:34,   comprobantes:91,   clasif:'Pequeño', estado:'proceso', pipeline:'Contacto inicial',   fechaGestion:null,       importante:false, comentarios:[{autor:'Carlos Ríos',iniciales:'CR',fecha:'20 may 2026',texto:'No ha respondido los últimos 2 correos. Intentar por WhatsApp.'},{autor:'Carlos Ríos',iniciales:'CR',fecha:'03 jun 2026',texto:'Agendar llamada de cierre antes del vencimiento.',alerta:{fechaAlerta:'2026-06-05',hora:'11:30 am',estado:'cancelado',comentarioResolucion:'No contestó. Número de WhatsApp sin respuesta. Se reagendará la próxima semana.'}}] },
  { id:'689', nombre:'Papelería Central Ltda.',     prob:'Alto',  valor:'$1.800.000', plan:'Avanzado Retail',          vertical:'Retail',       antiguedad:'36 meses', diasUltima:1,  venceDia:27, venceMes:4, facturas:210,  comprobantes:580,  clasif:'Grande',  estado:'ganado',  fechaGestion:'12 may 2026', validado:true, importante:false, comentarios:[] },
  { id:'201', nombre:'Café La Candelaria',          prob:'Bajo',  valor:'$480.000',  plan:'Emprendedor Restaurante',   vertical:'Restaurante',  antiguedad:'5 meses',  diasUltima:28, venceDia:22, facturas:12,   comprobantes:29,   clasif:'Pequeño', estado:'perdido', fechaGestion:'08 may 2026', motivoPerdida:'Cerré el negocio', importante:false, comentarios:[{autor:'Ana García',iniciales:'AG',fecha:'08 may 2026',texto:'Cliente decidió no renovar por problemas de caja. Registrar como perdido.'}] },
  { id:'774', nombre:'Distribuidora El Éxito S.A.', prob:'Alto',  valor:'$3.600.000', plan:'Premium Retail',           vertical:'Retail',       antiguedad:'48 meses', diasUltima:2,  venceDia:23, venceMes:4, facturas:430,  comprobantes:1120, clasif:'Grande',  estado:'proceso', pipeline:'Propuesta enviada', fechaGestion:null,       importante:false, comentarios:[{autor:'Luis Pérez',iniciales:'LP',fecha:'25 may 2026',texto:'Cliente VIP. Agendar visita presencial antes del vencimiento.'},{autor:'María Torres',iniciales:'MT',fecha:'28 may 2026',texto:'Visita confirmada para el 2 de junio.'},{autor:'María Torres',iniciales:'MT',fecha:'05 jun 2026',texto:'Confirmar asistencia a la reunión presencial y enviar agenda previa.',alerta:{fechaAlerta:'2026-06-12',hora:'2:00 pm',estado:'pendiente'}}] },
  { id:'390', nombre:'Servicios Click S.A.S.',      prob:'Medio', valor:'$720.000',  plan:'Emprendedor Servicios',     vertical:'Servicios',    antiguedad:'14 meses', diasUltima:7,  venceDia:15, facturas:55,   comprobantes:130,  clasif:'Mediano', estado:'proceso', pipeline:'En seguimiento',    fechaGestion:null,       importante:false, comentarios:[{autor:'María Torres',iniciales:'MT',fecha:'18 may 2026',texto:'Cliente respondió correo. Quiere comparar precio con competencia antes de decidir.'},{autor:'María Torres',iniciales:'MT',fecha:'02 jun 2026',texto:'Envié comparativo de precios y tabla de beneficios exclusivos Bold.',alerta:{fechaAlerta:'2026-06-07',hora:'11:00 am',estado:'realizado',comentarioResolucion:'Reconoció ventajas del plan. Solicitó una semana más para decidir con su socio.'}},{autor:'María Torres',iniciales:'MT',fecha:'09 jun 2026',texto:'Seguimiento final antes del vencimiento.',alerta:{fechaAlerta:'2026-06-14',hora:'10:30 am',estado:'pendiente'}}] },
  { id:'133', nombre:'Farmacia Salud Total',        prob:'Alto',  valor:'$1.200.000', plan:'Profesional Retail',       vertical:'Retail',       antiguedad:'29 meses', diasUltima:4,  venceDia:9,  facturas:180,  comprobantes:412,  clasif:'Grande',  estado:'ganado',  fechaGestion:'15 may 2026', validado:true, importante:false, comentarios:[{autor:'Carlos Ríos',iniciales:'CR',fecha:'15 may 2026',texto:'Renovó sin inconvenientes. Muy satisfecho con el servicio.'}] },
  { id:'856', nombre:'Heladería Polar Express',     prob:'Bajo',  valor:'$480.000',  plan:'Emprendedor Restaurante',   vertical:'Restaurante',  antiguedad:'3 meses',  diasUltima:31, venceDia:27, facturas:8,    comprobantes:18,   clasif:'Pequeño', estado:'perdido', fechaGestion:'03 may 2026', motivoPerdida:'Ilocalizable', importante:false, comentarios:[] },
  { id:'477', nombre:'Moda & Estilo Boutique',      prob:'Medio', valor:'$960.000',  plan:'Avanzado Retail',           vertical:'Retail',       antiguedad:'17 meses', diasUltima:5,  venceDia:20, facturas:75,   comprobantes:190,  clasif:'Mediano', estado:'proceso', pipeline:'Propuesta enviada', fechaGestion:null,       importante:false, comentarios:[{autor:'Ana García',iniciales:'AG',fecha:'22 may 2026',texto:'Interesada en upgrade al plan Premium. Enviar cotización.'},{autor:'Ana García',iniciales:'AG',fecha:'08 jun 2026',texto:'Contactar a Maria Paula para confirmar la decisión sobre el upgrade.',alerta:{fechaAlerta:'2026-06-10',hora:'11:00 am',estado:'pendiente'}}] },
  { id:'622', nombre:'Constructor Obras Civiles',   prob:'Alto',  valor:'$2.400.000', plan:'Profesional Servicios',    vertical:'Servicios',    antiguedad:'40 meses', diasUltima:1,  venceDia:8,  facturas:290,  comprobantes:740,  clasif:'Grande',  estado:'proceso', pipeline:'En cierre',         fechaGestion:null,       importante:false, comentarios:[{autor:'Luis Pérez',iniciales:'LP',fecha:'20 may 2026',texto:'Primer contacto exitoso. Gerente de proyectos interesado en renovar antes de vencimiento.'},{autor:'Luis Pérez',iniciales:'LP',fecha:'01 jun 2026',texto:'Envié propuesta de renovación anticipada con beneficios de continuidad.',alerta:{fechaAlerta:'2026-06-05',hora:'10:00 am',estado:'realizado',comentarioResolucion:'Confirmaron intención de renovar. Esperando aprobación del área financiera.'}},{autor:'Ramiro Guerrero',iniciales:'RG',fecha:'08 jun 2026',texto:'Seguimiento a la aprobación del área financiera. Muy cerca del cierre.',alerta:{fechaAlerta:'2026-06-13',hora:'9:00 am',estado:'pendiente'}}] },
  { id:'309', nombre:'Arepas & Más S.A.S.',         prob:'Bajo',  valor:'$480.000',  plan:'Emprendedor Restaurante',   vertical:'Restaurante',  antiguedad:'6 meses',  diasUltima:19, venceDia:25, facturas:20,   comprobantes:44,   clasif:'Pequeño', estado:'perdido', fechaGestion:'10 may 2026', motivoPerdida:'Precio alto', validado:true, importante:false, comentarios:[{autor:'Luis Pérez',iniciales:'LP',fecha:'10 may 2026',texto:'No pudo costear la renovación este ciclo. Seguimiento en 3 meses.'}] },
  { id:'741', nombre:'Súper Ofertas del Norte',     prob:'Medio', valor:'$1.200.000', plan:'Avanzado Retail',          vertical:'Retail',       antiguedad:'21 meses', diasUltima:6,  venceDia:14, facturas:140,  comprobantes:360,  clasif:'Mediano', estado:'proceso', pipeline:'En negociación',    fechaGestion:null,       importante:false, comentarios:[{autor:'Ana García',iniciales:'AG',fecha:'15 may 2026',texto:'Comercio con buena actividad pero titular difícil de contactar.'},{autor:'Ana García',iniciales:'AG',fecha:'29 may 2026',texto:'Logré contacto por referido interno. Acordar videollamada.',alerta:{fechaAlerta:'2026-06-04',hora:'3:00 pm',estado:'cancelado',comentarioResolucion:'No se conectó a la videollamada. Reagendar.'}}  ,{autor:'Carlos Ríos',iniciales:'CR',fecha:'06 jun 2026',texto:'Nuevo intento de contacto. Dejé mensaje de voz detallado con condiciones.',alerta:{fechaAlerta:'2026-06-10',hora:'4:00 pm',estado:'pendiente'}}] },
  { id:'188', nombre:'Consultora Legal Andina',     prob:'Alto',  valor:'$1.800.000', plan:'Profesional Servicios',    vertical:'Servicios',    antiguedad:'31 meses', diasUltima:2,  venceDia:10, facturas:200,  comprobantes:510,  clasif:'Grande',  estado:'ganado',  fechaGestion:'18 may 2026', importante:false, comentarios:[{autor:'María Torres',iniciales:'MT',fecha:'18 may 2026',texto:'Renovó y amplió usuarios del plan. Excelente cliente.'}] },
  { id:'523', nombre:'Librería El Saber',           prob:'Medio', valor:'$720.000',  plan:'Emprendedor Retail',        vertical:'Retail',       antiguedad:'11 meses', diasUltima:10, venceDia:28, facturas:45,   comprobantes:108,  clasif:'Pequeño', estado:'proceso', fechaGestion:null,       importante:false, comentarios:[{autor:'Carlos Ríos',iniciales:'CR',fecha:'25 may 2026',texto:'Dueño muy ocupado, atiende solo. Mejor contactar a primera hora de la mañana.'},{autor:'Carlos Ríos',iniciales:'CR',fecha:'05 jun 2026',texto:'Llamada exitosa. Explicó que quiere renovar pero necesita autorización del contador.',alerta:{fechaAlerta:'2026-06-11',hora:'8:30 am',estado:'pendiente'}}] },
  { id:'965', nombre:'Clínica Vida Sana IPS',       prob:'Alto',  valor:'$3.600.000', plan:'Premium Servicios',        vertical:'Servicios',    antiguedad:'52 meses', diasUltima:1,  venceDia:16, venceMes:4, facturas:510,  comprobantes:1340, clasif:'Grande',  estado:'proceso', pipeline:'En cierre',         fechaGestion:null,       importante:true,  comentarios:[{autor:'Carlos Ríos',iniciales:'CR',fecha:'26 may 2026',texto:'Director financiero solicita reunión para revisar condiciones del plan Premium.'},{autor:'Carlos Ríos',iniciales:'CR',fecha:'06 jun 2026',texto:'Reunión con director financiero pendiente de confirmar hora.',alerta:{fechaAlerta:'2026-06-09',hora:'9:30 am',estado:'realizado',comentarioResolucion:'Reunión exitosa. Director muy comprometido. Enviando propuesta formal esta tarde.'}}] },
  { id:'844', nombre:'Panadería La Espiga de Oro',  prob:'Bajo',  valor:'$480.000',  plan:'Emprendedor Restaurante',   vertical:'Restaurante',  antiguedad:'4 meses',  diasUltima:22, venceDia:19, facturas:15,   comprobantes:33,   clasif:'Pequeño', estado:'perdido', fechaGestion:'05 may 2026', motivoPerdida:'Funcionalidad faltante', importante:false, comentarios:[] },
  { id:'271', nombre:'Electrónica Futuro S.A.',     prob:'Alto',  valor:'$2.400.000', plan:'Avanzado Retail',          vertical:'Retail',       antiguedad:'44 meses', diasUltima:3,  venceDia:7,  facturas:320,  comprobantes:870,  clasif:'Grande',  estado:'proceso', pipeline:'En cierre',         fechaGestion:null,       importante:false, comentarios:[{autor:'Luis Pérez',iniciales:'LP',fecha:'22 may 2026',texto:'Cliente fiel de 4 años. Alta disposición a renovar. Solicitar upgrade a Premium.'},{autor:'Luis Pérez',iniciales:'LP',fecha:'30 may 2026',texto:'Presenté propuesta de upgrade a Premium con 2 meses de descuento.',alerta:{fechaAlerta:'2026-06-03',hora:'2:00 pm',estado:'realizado',comentarioResolucion:'Interesado en el upgrade pero quiere ver comparativo de funcionalidades. Enviando material.'}},{autor:'Ramiro Guerrero',iniciales:'RG',fecha:'06 jun 2026',texto:'Enviado comparativo Premium vs Avanzado. Esperando decisión final.',alerta:{fechaAlerta:'2026-06-09',hora:'5:00 pm',estado:'realizado',comentarioResolucion:'Confirmó el upgrade a Premium. Contrato en preparación.'}},{autor:'Ramiro Guerrero',iniciales:'RG',fecha:'09 jun 2026',texto:'Enviar contrato para firma digital esta semana.',alerta:{fechaAlerta:'2026-06-12',hora:'11:00 am',estado:'pendiente'}}] },
  { id:'618', nombre:'Transporte Rápido Ltda.',     prob:'Medio', valor:'$960.000',  plan:'Emprendedor Servicios',     vertical:'Servicios',    antiguedad:'16 meses', diasUltima:8,  venceDia:23, facturas:62,   comprobantes:155,  clasif:'Mediano', estado:'proceso', pipeline:'En negociación',    fechaGestion:null,       importante:false, comentarios:[{autor:'Ana García',iniciales:'AG',fecha:'21 may 2026',texto:'Solicita descuento por pronto pago. Escalar a gerencia.'},{autor:'Ana García',iniciales:'AG',fecha:'28 may 2026',texto:'Gerencia aprobó descuento del 8% por pago anticipado. Informar al cliente.',alerta:{fechaAlerta:'2026-06-02',hora:'3:30 pm',estado:'realizado',comentarioResolucion:'Cliente muy satisfecho con el descuento. Confirmó que procesará el pago esta semana.'}},{autor:'Ramiro Guerrero',iniciales:'RG',fecha:'07 jun 2026',texto:'Verificar si el pago fue procesado. Aún no aparece en el sistema.',alerta:{fechaAlerta:'2026-06-10',hora:'9:00 am',estado:'pendiente'}}] },
  { id:'453', nombre:'Ferretería Los Tornillos',    prob:'Bajo',  valor:'$720.000',  plan:'Emprendedor Retail',        vertical:'Retail',       antiguedad:'7 meses',  diasUltima:15, venceDia:29, facturas:28,   comprobantes:66,   clasif:'Pequeño', estado:'proceso', fechaGestion:null,       importante:false, comentarios:[{autor:'Luis Pérez',iniciales:'LP',fecha:'06 jun 2026',texto:'Cliente con poca actividad. Menciona que su prima también tiene un punto y quizás no renueva.'},{autor:'Luis Pérez',iniciales:'LP',fecha:'08 jun 2026',texto:'Intentar último contacto antes de marcar como riesgo alto.',alerta:{fechaAlerta:'2026-06-15',hora:'3:00 pm',estado:'pendiente'}}] },
  { id:'730', nombre:'Instituto de Idiomas Global', prob:'Alto',  valor:'$1.800.000', plan:'Profesional Servicios',    vertical:'Servicios',    antiguedad:'33 meses', diasUltima:2,  venceDia:6,  facturas:230,  comprobantes:590,  clasif:'Grande',  estado:'ganado',  fechaGestion:'20 may 2026', importante:false, comentarios:[{autor:'Luis Pérez',iniciales:'LP',fecha:'20 may 2026',texto:'Renovó anticipado. Aplicar descuento fidelidad del 8%.'}] },
  { id:'192', nombre:'Restaurante Mar Azul',        prob:'Medio', valor:'$1.200.000', plan:'Avanzado Restaurante',     vertical:'Restaurante',  antiguedad:'19 meses', diasUltima:9,  venceDia:16, facturas:100,  comprobantes:260,  clasif:'Mediano', estado:'proceso', fechaGestion:null,       importante:false, comentarios:[{autor:'Ana García',iniciales:'AG',fecha:'02 jun 2026',texto:'Propietaria muy amable pero menciona que estará evaluando renovar o cambiar de plan.'},{autor:'Ana García',iniciales:'AG',fecha:'07 jun 2026',texto:'Preparar cotización del plan Profesional para comparar vs Avanzado actual.',alerta:{fechaAlerta:'2026-06-12',hora:'12:00 pm',estado:'pendiente'}}] },
  { id:'867', nombre:'Minimercado La Esquina',      prob:'Bajo',  valor:'$480.000',  plan:'Emprendedor Retail',        vertical:'Retail',       antiguedad:'2 meses',  diasUltima:25, venceDia:30, facturas:9,    comprobantes:22,   clasif:'Pequeño', estado:'proceso', fechaGestion:null,       importante:false, comentarios:[] },
  { id:'544', nombre:'Óptica Visión Clara',         prob:'Alto',  valor:'$1.200.000', plan:'Profesional Retail',       vertical:'Retail',       antiguedad:'26 meses', diasUltima:4,  venceDia:11, facturas:160,  comprobantes:420,  clasif:'Grande',  estado:'proceso', pipeline:'Propuesta enviada', fechaGestion:null,       importante:false, comentarios:[{autor:'María Torres',iniciales:'MT',fecha:'23 may 2026',texto:'Muy activo en uso de la plataforma. Alta probabilidad de renovación.'},{autor:'María Torres',iniciales:'MT',fecha:'31 may 2026',texto:'Envié propuesta formal. Dueña fuera de ciudad hasta el 7 de junio.',alerta:{fechaAlerta:'2026-06-08',hora:'10:00 am',estado:'realizado',comentarioResolucion:'Regresó de viaje. Revisará propuesta hoy mismo y responde mañana.'}},{autor:'María Torres',iniciales:'MT',fecha:'08 jun 2026',texto:'Confirmar decisión sobre la renovación.',alerta:{fechaAlerta:'2026-06-10',hora:'2:00 pm',estado:'pendiente'}}] },
  { id:'376', nombre:'Agencia de Viajes Xplora',    prob:'Medio', valor:'$960.000',  plan:'Emprendedor Servicios',     vertical:'Servicios',    antiguedad:'13 meses', diasUltima:11, venceDia:24, facturas:52,   comprobantes:125,  clasif:'Mediano', estado:'proceso', fechaGestion:null,       importante:false, comentarios:[] },
  { id:'811', nombre:'Tostadora Café de Origen',    prob:'Bajo',  valor:'$480.000',  plan:'Emprendedor Restaurante',   vertical:'Restaurante',  antiguedad:'5 meses',  diasUltima:18, venceDia:26, facturas:11,   comprobantes:26,   clasif:'Pequeño', estado:'perdido', fechaGestion:'01 may 2026', motivoPerdida:'Ilocalizable', importante:false, comentarios:[] },
  { id:'659', nombre:'Constructora Cimientos S.A.', prob:'Alto',  valor:'$3.600.000', plan:'Premium Servicios',        vertical:'Servicios',    antiguedad:'55 meses', diasUltima:1,  venceDia:2,  facturas:480,  comprobantes:1200, clasif:'Grande',  estado:'proceso', pipeline:'En negociación',    fechaGestion:null,       importante:false, comentarios:[{autor:'Carlos Ríos',iniciales:'CR',fecha:'27 may 2026',texto:'Contrato multianual en negociación. Coordinar con equipo jurídico.'},{autor:'Carlos Ríos',iniciales:'CR',fecha:'01 jun 2026',texto:'Reunión con jurídico para revisar cláusulas del contrato bianual.',alerta:{fechaAlerta:'2026-06-04',hora:'10:30 am',estado:'realizado',comentarioResolucion:'Cláusulas revisadas y aprobadas internamente. Enviando al cliente para revisión.'}},{autor:'Carlos Ríos',iniciales:'CR',fecha:'06 jun 2026',texto:'Cliente revisando contrato con su equipo legal. Confirmar firma.',alerta:{fechaAlerta:'2026-06-11',hora:'2:30 pm',estado:'pendiente'}}] },
  { id:'283', nombre:'Droguería Pronto Alivio',     prob:'Medio', valor:'$720.000',  plan:'Emprendedor Retail',        vertical:'Retail',       antiguedad:'10 meses', diasUltima:13, venceDia:21, facturas:40,   comprobantes:98,   clasif:'Pequeño', estado:'proceso', fechaGestion:null,       importante:false, comentarios:[] },
  { id:'497', nombre:'Spa & Wellness Center',       prob:'Alto',  valor:'$1.800.000', plan:'Profesional Servicios',    vertical:'Servicios',    antiguedad:'27 meses', diasUltima:3,  venceDia:4,  facturas:195,  comprobantes:500,  clasif:'Grande',  estado:'ganado',  fechaGestion:'22 may 2026', validado:true, importante:false, comentarios:[{autor:'Ana García',iniciales:'AG',fecha:'22 may 2026',texto:'Renovación exitosa. Cliente solicitó capacitación adicional.'}] },
  { id:'922', nombre:'Muebles Diseño y Arte',       prob:'Bajo',  valor:'$960.000',  plan:'Avanzado Retail',           vertical:'Retail',       antiguedad:'9 meses',  diasUltima:20, venceDia:17, facturas:38,   comprobantes:92,   clasif:'Mediano', estado:'proceso', fechaGestion:null,       importante:false, comentarios:[] },
  { id:'165', nombre:'Colegio Nuevos Horizontes',   prob:'Alto',  valor:'$2.400.000', plan:'Profesional Servicios',    vertical:'Servicios',    antiguedad:'38 meses', diasUltima:2,  venceDia:13, facturas:260,  comprobantes:680,  clasif:'Grande',  estado:'proceso', pipeline:'Decisión pendiente', fechaGestion:null,      importante:false, comentarios:[{autor:'Luis Pérez',iniciales:'LP',fecha:'28 may 2026',texto:'Rector muy comprometido con la herramienta. Renovación casi segura.'},{autor:'Luis Pérez',iniciales:'LP',fecha:'03 jun 2026',texto:'Junta directiva revisará propuesta en sesión del 9 de junio. Esperar resultado.',alerta:{fechaAlerta:'2026-06-09',hora:'6:00 pm',estado:'realizado',comentarioResolucion:'Junta aprobó la renovación. Rector confirmará detalles mañana en la mañana.'}},{autor:'Ramiro Guerrero',iniciales:'RG',fecha:'09 jun 2026',texto:'Llamar al rector para confirmar detalles y fecha de firma.',alerta:{fechaAlerta:'2026-06-10',hora:'8:30 am',estado:'pendiente'}}] },
  { id:'708', nombre:'Asadero El Rincón Paisa',     prob:'Medio', valor:'$720.000',  plan:'Emprendedor Restaurante',   vertical:'Restaurante',  antiguedad:'12 meses', diasUltima:7,  venceDia:31, facturas:58,   comprobantes:138,  clasif:'Mediano', estado:'proceso', fechaGestion:null,       importante:false, comentarios:[{autor:'Carlos Ríos',iniciales:'CR',fecha:'04 jun 2026',texto:'Primer contacto realizado. Cocinero-dueño con buen humor, dice que Bold le ha funcionado bien.'},{autor:'Carlos Ríos',iniciales:'CR',fecha:'08 jun 2026',texto:'Llamar esta semana para cerrar la renovación antes de que venza.',alerta:{fechaAlerta:'2026-06-11',hora:'11:30 am',estado:'pendiente'}}] },
  { id:'334', nombre:'Deportes Power Gym',          prob:'Bajo',  valor:'$480.000',  plan:'Emprendedor Servicios',     vertical:'Servicios',    antiguedad:'4 meses',  diasUltima:24, venceDia:27, facturas:14,   comprobantes:31,   clasif:'Pequeño', estado:'perdido', fechaGestion:'07 may 2026', motivoPerdida:'Cambio de proveedor', importante:false, comentarios:[] },
];

const EJECUTIVOS = ['Ana García', 'Luis Pérez', 'María Torres', 'Carlos Ríos', 'Ramiro Guerrero'];
ROWS.forEach(r => { r.ejecutivo = r.comentarios.length ? r.comentarios[0].autor : null; });
{
  const ejecutivoOverrides = { '345':'Ramiro Guerrero', '774':'María Torres', '622':'Ramiro Guerrero', '271':'Ramiro Guerrero' };
  Object.keys(ejecutivoOverrides).forEach(id => {
    const r = ROWS.find(x => x.id === id);
    if (r) r.ejecutivo = ejecutivoOverrides[id];
  });
}
{
  const validadosProceso = ['622', '165', '271'];
  validadosProceso.forEach(id => {
    const r = ROWS.find(x => x.id === id);
    if (r) r.validado = true;
  });
}

const PROB_HISTORY = {
  '345': [{iniciales:'CR',autor:'Carlos Ríos',      fecha:'10 abr 2026', prob:'Bajo',  comentario:'Primera evaluación. Cliente recién llegado, sin historial suficiente.' },
          {iniciales:'AG',autor:'Ana García',       fecha:'02 may 2026', prob:'Medio', comentario:'Respondió bien a la llamada. Hay interés pero aún no hay certeza de presupuesto.' },
          {iniciales:'LP',autor:'Luis Pérez',       fecha:'27 may 2026', prob:'Alto',  comentario:'Confirmó que tiene el presupuesto aprobado. Alta probabilidad de cierre.' }],
  '774': [{iniciales:'MT',autor:'María Torres',     fecha:'15 mar 2026', prob:'Medio', comentario:'Cliente grande pero con proceso de aprobación interno largo.' },
          {iniciales:'LP',autor:'Luis Pérez',       fecha:'28 may 2026', prob:'Alto',  comentario:'Visita presencial realizada. Director comprometido con la renovación.' },
          {iniciales:'MT',autor:'María Torres',     fecha:'05 jun 2026', prob:'Alto',  comentario:'Confirmó agenda previa para la reunión presencial. Se mantiene en alto.' }],
  '133': [{iniciales:'AG',autor:'Ana García',       fecha:'20 abr 2026', prob:'Medio', comentario:'Usa la plataforma regularmente pero no ha confirmado intención de renovar.' },
          {iniciales:'CR',autor:'Carlos Ríos',      fecha:'15 may 2026', prob:'Alto',  comentario:'Renovó sin inconvenientes. Confirmado como ganado.' }],
  '965': [{iniciales:'RG',autor:'Ramiro Guerrero',  fecha:'01 may 2026', prob:'Medio', comentario:'Cliente estratégico, en espera de reunión con director financiero.' },
          {iniciales:'CR',autor:'Carlos Ríos',      fecha:'26 may 2026', prob:'Alto',  comentario:'Reunión confirmada para la semana siguiente. Muy positivo.' },
          {iniciales:'CR',autor:'Carlos Ríos',      fecha:'09 jun 2026', prob:'Alto',  comentario:'Reunión exitosa con director financiero. Propuesta formal en camino.' }],
  '512': [{iniciales:'CR',autor:'Carlos Ríos',      fecha:'15 abr 2026', prob:'Alto',  comentario:'Cliente activo con buen historial de pagos.' },
          {iniciales:'CR',autor:'Carlos Ríos',      fecha:'20 may 2026', prob:'Medio', comentario:'No ha respondido los últimos correos. Bajando probabilidad mientras se retoma contacto.' }],
  '477': [{iniciales:'AG',autor:'Ana García',       fecha:'05 may 2026', prob:'Bajo',  comentario:'Sin actividad reciente. Evaluación inicial conservadora.' },
          {iniciales:'AG',autor:'Ana García',       fecha:'22 may 2026', prob:'Medio', comentario:'Interesada en upgrade al plan Premium. Sube la probabilidad.' }],
  '622': [{iniciales:'LP',autor:'Luis Pérez',       fecha:'08 may 2026', prob:'Medio', comentario:'Gerente de proyectos receptivo pero sin compromiso firme aún.' },
          {iniciales:'LP',autor:'Luis Pérez',       fecha:'20 may 2026', prob:'Alto',  comentario:'Primer contacto exitoso. Interés claro en renovar antes de vencimiento.' },
          {iniciales:'RG',autor:'Ramiro Guerrero',  fecha:'08 jun 2026', prob:'Alto',  comentario:'Cerca de la aprobación financiera. Se mantiene en alto.' }],
  '659': [{iniciales:'CR',autor:'Carlos Ríos',      fecha:'10 may 2026', prob:'Medio', comentario:'Contrato multianual en evaluación por parte del cliente.' },
          {iniciales:'CR',autor:'Carlos Ríos',      fecha:'27 may 2026', prob:'Alto',  comentario:'Negociación avanzando bien con equipo jurídico.' }],
  '741': [{iniciales:'AG',autor:'Ana García',       fecha:'02 may 2026', prob:'Bajo',  comentario:'Titular difícil de contactar. Probabilidad baja por ahora.' },
          {iniciales:'AG',autor:'Ana García',       fecha:'15 may 2026', prob:'Medio', comentario:'Buena actividad en el comercio, sube la probabilidad pese a dificultad de contacto.' }],
  '390': [{iniciales:'MT',autor:'María Torres',     fecha:'01 may 2026', prob:'Bajo',  comentario:'Cliente evaluando alternativas de la competencia.' },
          {iniciales:'MT',autor:'María Torres',     fecha:'18 may 2026', prob:'Medio', comentario:'Respondió correo y solicitó comparativo de precios. Mejora la probabilidad.' }],
  '544': [{iniciales:'MT',autor:'María Torres',     fecha:'10 may 2026', prob:'Medio', comentario:'Cliente activo, en evaluación de renovación.' },
          {iniciales:'MT',autor:'María Torres',     fecha:'23 may 2026', prob:'Alto',  comentario:'Muy activo en uso de la plataforma. Alta probabilidad de renovación.' }],
  '618': [{iniciales:'AG',autor:'Ana García',       fecha:'05 may 2026', prob:'Bajo',  comentario:'Solicitó descuento, sin definición clara aún.' },
          {iniciales:'AG',autor:'Ana García',       fecha:'21 may 2026', prob:'Medio', comentario:'Escalado a gerencia para aprobar descuento. Sube la probabilidad.' }],
  '165': [{iniciales:'LP',autor:'Luis Pérez',       fecha:'02 may 2026', prob:'Medio', comentario:'Rector receptivo, en evaluación del presupuesto institucional.' },
          {iniciales:'LP',autor:'Luis Pérez',       fecha:'28 may 2026', prob:'Alto',  comentario:'Rector muy comprometido con la herramienta. Renovación casi segura.' }],
  '271': [{iniciales:'LP',autor:'Luis Pérez',       fecha:'01 may 2026', prob:'Medio', comentario:'Cliente fiel, evaluando si renovar igual o hacer upgrade.' },
          {iniciales:'LP',autor:'Luis Pérez',       fecha:'22 may 2026', prob:'Alto',  comentario:'Alta disposición a renovar. Solicita upgrade a Premium.' }],
  '192': [{iniciales:'AG',autor:'Ana García',       fecha:'15 may 2026', prob:'Bajo',  comentario:'Propietaria evaluando cambiar de plan o no renovar.' },
          {iniciales:'AG',autor:'Ana García',       fecha:'02 jun 2026', prob:'Medio', comentario:'Conversación amable, sigue evaluando entre renovar o cambiar de plan.' }],
  '708': [{iniciales:'CR',autor:'Carlos Ríos',      fecha:'20 may 2026', prob:'Bajo',  comentario:'Primer acercamiento, sin información suficiente aún.' },
          {iniciales:'CR',autor:'Carlos Ríos',      fecha:'04 jun 2026', prob:'Medio', comentario:'Primer contacto realizado, buena disposición del dueño.' }],
  '453': [{iniciales:'LP',autor:'Luis Pérez',       fecha:'25 may 2026', prob:'Medio', comentario:'Cliente con actividad moderada.' },
          {iniciales:'LP',autor:'Luis Pérez',       fecha:'06 jun 2026', prob:'Bajo',  comentario:'Poca actividad y posible no renovación por parte de su prima con punto similar.' }],
};

const ESTADO_HISTORY = {
  '345': [
    { iniciales:'AG', autor:'Ana García',   fecha:'10 abr 2026', estado:'proceso', pipeline:'Contacto inicial',  comentario:'Iniciando seguimiento. Cliente en etapa de evaluación del presupuesto.' },
    { iniciales:'LP', autor:'Luis Pérez',   fecha:'15 may 2026', estado:'proceso', pipeline:'En negociación',    comentario:'Mantener en proceso. Propuesta enviada, esperando respuesta del director financiero.' },
    { iniciales:'RG', autor:'Ramiro Guerrero', fecha:'07 jun 2026', estado:'proceso', pipeline:'En negociación', comentario:'Cliente aceptó la propuesta con descuento. Esperando firma del contrato.' },
  ],
  '774': [
    { iniciales:'MT', autor:'María Torres', fecha:'01 mar 2026', estado:'proceso', pipeline:'En seguimiento',    comentario:'Cliente VIP asignado a seguimiento prioritario.' },
    { iniciales:'LP', autor:'Luis Pérez',   fecha:'10 may 2026', estado:'proceso', pipeline:'Propuesta enviada', comentario:'Visita presencial programada. Alta probabilidad de cierre.' },
    { iniciales:'MT', autor:'María Torres', fecha:'28 may 2026', estado:'proceso', pipeline:'Propuesta enviada', comentario:'Visita confirmada para el 2 de junio. Se mantiene en propuesta enviada.' },
  ],
  '133': [
    { iniciales:'AG', autor:'Ana García',   fecha:'05 abr 2026', estado:'proceso', pipeline:'En seguimiento',    comentario:'Cliente activo, responde rápido. Buen candidato para renovación anticipada.' },
    { iniciales:'CR', autor:'Carlos Ríos',  fecha:'15 may 2026', estado:'ganado',                               comentario:'Renovó sin inconvenientes. Pagó de contado. Registrar como ganado.' },
  ],
  '188': [
    { iniciales:'MT', autor:'María Torres', fecha:'12 abr 2026', estado:'proceso', pipeline:'Contacto inicial',  comentario:'Primera llamada realizada. Cliente interesado en mantener el plan.' },
    { iniciales:'MT', autor:'María Torres', fecha:'18 may 2026', estado:'ganado',                               comentario:'Renovó y amplió usuarios. Solicitar caso de éxito para marketing.' },
  ],
  '201': [
    { iniciales:'AG', autor:'Ana García',   fecha:'20 abr 2026', estado:'proceso', pipeline:'En seguimiento',    comentario:'Cliente con señales de baja, contactar urgente.' },
    { iniciales:'AG', autor:'Ana García',   fecha:'08 may 2026', estado:'perdido', motivo:'Cerré el negocio',    comentario:'Cliente decidió no renovar por problemas de caja. Registrar como perdido.' },
  ],
  '512': [
    { iniciales:'CR', autor:'Carlos Ríos',  fecha:'18 abr 2026', estado:'proceso', pipeline:'Contacto inicial',  comentario:'Primer contacto realizado, comercio con buen historial de uso.' },
    { iniciales:'CR', autor:'Carlos Ríos',  fecha:'20 may 2026', estado:'proceso', pipeline:'Contacto inicial',  comentario:'No ha respondido los últimos 2 correos. Intentar por WhatsApp.' },
  ],
  '477': [
    { iniciales:'AG', autor:'Ana García',   fecha:'02 may 2026', estado:'proceso', pipeline:'Contacto inicial',  comentario:'Primer acercamiento al comercio.' },
    { iniciales:'AG', autor:'Ana García',   fecha:'22 may 2026', estado:'proceso', pipeline:'Propuesta enviada', comentario:'Interesada en upgrade al plan Premium. Enviar cotización.' },
  ],
  '622': [
    { iniciales:'LP', autor:'Luis Pérez',   fecha:'05 may 2026', estado:'proceso', pipeline:'Contacto inicial',  comentario:'Comercio identificado como candidato a renovación anticipada.' },
    { iniciales:'LP', autor:'Luis Pérez',   fecha:'20 may 2026', estado:'proceso', pipeline:'En cierre',         comentario:'Primer contacto exitoso. Gerente de proyectos interesado en renovar antes de vencimiento.' },
    { iniciales:'RG', autor:'Ramiro Guerrero', fecha:'08 jun 2026', estado:'proceso', pipeline:'En cierre',      comentario:'Seguimiento a la aprobación del área financiera. Muy cerca del cierre.' },
  ],
  '659': [
    { iniciales:'CR', autor:'Carlos Ríos',  fecha:'10 may 2026', estado:'proceso', pipeline:'En seguimiento',    comentario:'Contrato multianual identificado como oportunidad clave.' },
    { iniciales:'CR', autor:'Carlos Ríos',  fecha:'27 may 2026', estado:'proceso', pipeline:'En negociación',    comentario:'Contrato multianual en negociación. Coordinar con equipo jurídico.' },
  ],
  '741': [
    { iniciales:'AG', autor:'Ana García',   fecha:'15 may 2026', estado:'proceso', pipeline:'Contacto inicial',  comentario:'Comercio con buena actividad pero titular difícil de contactar.' },
    { iniciales:'AG', autor:'Ana García',   fecha:'29 may 2026', estado:'proceso', pipeline:'En negociación',    comentario:'Logré contacto por referido interno. Acordar videollamada.' },
  ],
  '390': [
    { iniciales:'MT', autor:'María Torres', fecha:'18 may 2026', estado:'proceso', pipeline:'Contacto inicial',  comentario:'Cliente respondió correo. Quiere comparar precio con competencia antes de decidir.' },
    { iniciales:'MT', autor:'María Torres', fecha:'02 jun 2026', estado:'proceso', pipeline:'En seguimiento',    comentario:'Envié comparativo de precios y tabla de beneficios exclusivos Bold.' },
  ],
  '544': [
    { iniciales:'MT', autor:'María Torres', fecha:'23 may 2026', estado:'proceso', pipeline:'En seguimiento',    comentario:'Muy activo en uso de la plataforma. Alta probabilidad de renovación.' },
    { iniciales:'MT', autor:'María Torres', fecha:'31 may 2026', estado:'proceso', pipeline:'Propuesta enviada', comentario:'Envié propuesta formal. Dueña fuera de ciudad hasta el 7 de junio.' },
  ],
  '618': [
    { iniciales:'AG', autor:'Ana García',   fecha:'21 may 2026', estado:'proceso', pipeline:'Contacto inicial',  comentario:'Solicita descuento por pronto pago. Escalar a gerencia.' },
    { iniciales:'AG', autor:'Ana García',   fecha:'28 may 2026', estado:'proceso', pipeline:'En negociación',    comentario:'Gerencia aprobó descuento del 8% por pago anticipado. Informar al cliente.' },
  ],
  '165': [
    { iniciales:'LP', autor:'Luis Pérez',   fecha:'28 may 2026', estado:'proceso', pipeline:'En seguimiento',    comentario:'Rector muy comprometido con la herramienta. Renovación casi segura.' },
    { iniciales:'LP', autor:'Luis Pérez',   fecha:'03 jun 2026', estado:'proceso', pipeline:'Decisión pendiente', comentario:'Junta directiva revisará propuesta en sesión del 9 de junio. Esperar resultado.' },
  ],
  '271': [
    { iniciales:'LP', autor:'Luis Pérez',   fecha:'22 may 2026', estado:'proceso', pipeline:'En seguimiento',    comentario:'Cliente fiel de 4 años. Alta disposición a renovar.' },
    { iniciales:'LP', autor:'Luis Pérez',   fecha:'30 may 2026', estado:'proceso', pipeline:'Propuesta enviada', comentario:'Presenté propuesta de upgrade a Premium con 2 meses de descuento.' },
    { iniciales:'RG', autor:'Ramiro Guerrero', fecha:'06 jun 2026', estado:'proceso', pipeline:'En cierre',      comentario:'Confirmó el upgrade a Premium. Contrato en preparación.' },
  ],
  '192': [
    { iniciales:'AG', autor:'Ana García',   fecha:'02 jun 2026', estado:'proceso', pipeline:'Contacto inicial',  comentario:'Propietaria muy amable pero menciona que estará evaluando renovar o cambiar de plan.' },
    { iniciales:'AG', autor:'Ana García',   fecha:'07 jun 2026', estado:'proceso', pipeline:'En seguimiento',    comentario:'Preparar cotización del plan Profesional para comparar vs Avanzado actual.' },
  ],
  '708': [
    { iniciales:'CR', autor:'Carlos Ríos',  fecha:'04 jun 2026', estado:'proceso', pipeline:'Contacto inicial',  comentario:'Primer contacto realizado. Cocinero-dueño con buen humor, dice que Bold le ha funcionado bien.' },
    { iniciales:'CR', autor:'Carlos Ríos',  fecha:'08 jun 2026', estado:'proceso', pipeline:'En seguimiento',    comentario:'Llamar esta semana para cerrar la renovación antes de que venza.' },
  ],
  '453': [
    { iniciales:'LP', autor:'Luis Pérez',   fecha:'06 jun 2026', estado:'proceso', pipeline:'Contacto inicial',  comentario:'Cliente con poca actividad. Menciona que su prima también tiene un punto y quizás no renueva.' },
    { iniciales:'LP', autor:'Luis Pérez',   fecha:'08 jun 2026', estado:'proceso', pipeline:'En seguimiento',    comentario:'Intentar último contacto antes de marcar como riesgo alto.' },
  ],
};

const EJECUTIVO_HISTORY = {
  '345': [
    { iniciales:'RG', autor:'Ramiro Guerrero', fecha:'02 may 2026', ejecutivoAnterior:'Ana García',   ejecutivoNuevo:'Luis Pérez' },
    { iniciales:'RG', autor:'Ramiro Guerrero', fecha:'04 jun 2026', ejecutivoAnterior:'Luis Pérez',   ejecutivoNuevo:'Ramiro Guerrero' },
  ],
  '774': [
    { iniciales:'RG', autor:'Ramiro Guerrero', fecha:'28 may 2026', ejecutivoAnterior:'Luis Pérez',   ejecutivoNuevo:'María Torres' },
  ],
  '622': [
    { iniciales:'RG', autor:'Ramiro Guerrero', fecha:'08 jun 2026', ejecutivoAnterior:'Luis Pérez',   ejecutivoNuevo:'Ramiro Guerrero' },
  ],
  '965': [
    { iniciales:'RG', autor:'Ramiro Guerrero', fecha:'26 may 2026', ejecutivoAnterior:'Ramiro Guerrero', ejecutivoNuevo:'Carlos Ríos' },
  ],
  '271': [
    { iniciales:'RG', autor:'Ramiro Guerrero', fecha:'06 jun 2026', ejecutivoAnterior:'Luis Pérez',   ejecutivoNuevo:'Ramiro Guerrero' },
  ],
};

/* ── CONSTANTES ── */
const MONTHS = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
const PROB_STYLES = {
  Alto:  { bg: '#D4F1E7', color: '#00623D' },
  Medio: { bg: '#FFF0CC', color: '#8A5A00' },
  Bajo:  { bg: '#FFE0E8', color: '#A30028' },
};
const ESTADO_LABELS = { proceso:'En proceso', ganado:'Ganado', perdido:'Perdido' };
const ESTADO_COLORS = { proceso: 'var(--blue)', ganado: '#00875A', perdido: 'var(--red)' };

const I = {
  money:   `<span class="has-tip" data-tip="Valor a pagar"><svg class="card-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="8" r="6.5"/><path d="M8 4.5v7M6 6.5c0-.83.9-1.5 2-1.5s2 .67 2 1.5S9.1 8 8 8s-2 .67-2 1.5S6.9 11 8 11s2-.67 2-1.5"/></svg></span>`,
  history: `<span class="has-tip" data-tip="Días desde última transacción"><svg class="card-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 8a6 6 0 1 0 6-6V4"/><path d="M8 2L6 4l2 2"/><path d="M8 6v3l2 1"/></svg></span>`,
  calx:    `<svg class="card-cal-x" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="12" height="11" rx="1.5"/><path d="M2 7h12M5.5 2v2.5M10.5 2v2.5M6 10l4-4M10 10l-4-4"/></svg>`,
  comment: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M13.5 2.5h-11A1 1 0 0 0 1.5 3.5v7a1 1 0 0 0 1 1H5l3 2.5 3-2.5h2.5a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1z"/></svg>`,
};

/* ── UTILIDADES ── */
function probChip(p) {
  const map = { 'Alto':'chip-high', 'Medio':'chip-mid', 'Bajo':'chip-low' };
  return `<span class="chip ${map[p]}">${p}</span>`;
}
function clasifChip(c) {
  const map = { 'Grande':'chip-grande', 'Mediano':'chip-mediano', 'Pequeño':'chip-pequeno' };
  return `<span class="chip ${map[c]}">${c}</span>`;
}
function probDot(p) {
  const cls = { 'Alto':'dot-high','Medio':'dot-mid','Bajo':'dot-low' };
  return `<span class="card-prob"><span class="dot ${cls[p]}"></span>${p}</span>`;
}
function diasRestantes(r) {
  const hoy  = new Date(2026, 5, 9);
  const mes  = r.venceMes  ?? 5;
  const anio = r.venceAnio ?? 2026;
  return Math.round((new Date(anio, mes, r.venceDia) - hoy) / 86400000);
}

/* ── NAVEGACIÓN ── */
function openDetail(id) {
  window.location.href = 'detalle.html?id=' + id;
}

/* ── FILTRO EJECUTIVO COMERCIAL ── */
let ejecutivoFilter = 'Todos';

function matchesEjecutivoFilter(r) {
  if (ejecutivoFilter === 'Todos') return true;
  if (ejecutivoFilter === 'Sin asignar') return !r || !r.ejecutivo;
  return r && r.ejecutivo === ejecutivoFilter;
}

function setEjecutivoFilter(valor) {
  ejecutivoFilter = valor;
  if (typeof renderCards   === 'function') renderCards();
  if (typeof renderAlertas === 'function') renderAlertas();
  if (typeof renderTable   === 'function') renderTable();
}

function handleEjecutivoFilterLista(select) {
  select.value = 'Todos';
  alert('No tienes permiso para filtrar por otros ejecutivos.');
}

/* ── DRAWER (FILTROS) ── */
function openDrawer() {
  document.getElementById('drawer').classList.add('open');
  document.getElementById('backdrop').classList.add('open');
}
function closeDrawer() {
  document.getElementById('drawer').classList.remove('open');
  const cd = document.getElementById('comment-drawer');
  if (!cd || !cd.classList.contains('open')) {
    document.getElementById('backdrop').classList.remove('open');
  }
}

/* ── DOWNLOAD MODAL ── */
function openDownloadModal() {
  document.getElementById('download-desde').value = '';
  document.getElementById('download-hasta').value = '';
  document.getElementById('download-error').style.display = 'none';
  document.getElementById('download-modal').classList.add('open');
}
function closeDownloadModal(e) {
  if (e && e.target !== document.getElementById('download-modal')) return;
  document.getElementById('download-modal').classList.remove('open');
}
function confirmDownload() {
  const desde = document.getElementById('download-desde').value;
  const hasta = document.getElementById('download-hasta').value;
  const err   = document.getElementById('download-error');
  if (!desde || !hasta) { err.style.display = 'block'; return; }
  err.style.display = 'none';
  const btn = document.querySelector('#download-modal .btn-primary');
  const original = btn.innerHTML;
  btn.innerHTML = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" style="width:13px;height:13px;animation:spin 0.8s linear infinite"><path d="M8 2a6 6 0 1 1-4.24 1.76"/></svg> Descargando…';
  btn.disabled = true;
  setTimeout(() => { btn.innerHTML = original; btn.disabled = false; document.getElementById('download-modal').classList.remove('open'); }, 1800);
}

/* ── COMMENT DRAWER ── */
let activeCommentId = null;

function openComments(id, hideImportante) {
  const r = ROWS.find(x => x.id === id);
  if (!r) return;
  activeCommentId = id;
  document.getElementById('comment-drawer-name').textContent = r.nombre;
  document.getElementById('comment-importante').checked = !!r.importante;
  const showImportante = !hideImportante && r.estado === 'proceso';
  document.getElementById('importante-label').style.visibility = showImportante ? 'visible' : 'hidden';
  updateEstadoInlineBtn(r.estado, r.motivoPerdida, r.pipeline);
  updateProbInlineBtn(r.prob);
  updateEjecutivoInlineBtn(r.ejecutivo);
  renderCommentList(r.comentarios);
  document.getElementById('comment-drawer').classList.add('open');
  document.getElementById('backdrop').classList.add('open');
}
function openCommentsFromTable(id) { openComments(id, true); }

function closeComments() {
  document.getElementById('comment-drawer').classList.remove('open');
  document.getElementById('backdrop').classList.remove('open');
  activeCommentId = null;
}

function toggleImportante(checkbox) {
  const r = ROWS.find(x => x.id === activeCommentId);
  if (!r) return;
  r.importante = checkbox.checked;
  if (typeof renderCards === 'function') renderCards();
}

function fmtAlertaDate(iso, hora) {
  const [y,m,d] = iso.split('-');
  const meses = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
  return `${parseInt(d)} ${meses[parseInt(m)-1]} ${y} - ${hora}`;
}

let activeCommentAlertaRowId = null;
let activeCommentAlertaIdx = null;
let selectedCommentResultado = null;

function renderAlertaBadge(alerta, comentIdx) {
  const BELL = `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width:12px;height:12px;flex-shrink:0"><path d="M8 2a4 4 0 0 1 4 4v3l1 1.5H3L4 9V6a4 4 0 0 1 4-4z"/><path d="M6.5 13.5a1.5 1.5 0 0 0 3 0"/></svg>`;
  const estadoStyles = {
    pendiente: { bg:'#F4F5F8', color:'#7B7E96', label:'Pendiente de gestión' },
    realizado:  { bg:'#E6F7F2', color:'#00875A', label:'✓ Realizado' },
    cancelado:  { bg:'#FFE8EE', color:'#A30028', label:'✕ Cancelado' },
  };
  const s = estadoStyles[alerta.estado] || estadoStyles.pendiente;
  const isPendiente = alerta.estado === 'pendiente';
  const labelAttrs = isPendiente && activeCommentId != null && comentIdx !== undefined
    ? `onclick="openCommentAlertaModal('${activeCommentId}',${comentIdx})" style="font-size:10px;font-weight:700;color:${s.color};background:${s.bg};border:1px solid ${s.color}44;border-radius:20px;padding:2px 8px;white-space:nowrap;cursor:pointer;text-decoration:underline"`
    : `style="font-size:10px;font-weight:700;color:${s.color};background:${s.bg};border:1px solid ${s.color}44;border-radius:20px;padding:2px 8px;white-space:nowrap"`;
  return `
    <div class="comment-alerta-tag" style="background:${s.bg};border:1px solid ${s.color}22;border-radius:8px;padding:8px 10px;margin-top:6px;margin-left:36px;display:flex;flex-direction:column;gap:4px">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:6px">
        <div style="display:flex;align-items:center;gap:5px;color:${s.color};font-size:11px;font-weight:700">
          ${BELL} Alerta: ${fmtAlertaDate(alerta.fechaAlerta, alerta.hora)}
        </div>
        <span ${labelAttrs}>${s.label}</span>
      </div>
      ${alerta.comentarioResolucion ? `<div style="font-size:12px;color:#444;line-height:1.4;margin-top:2px;padding-top:4px;border-top:1px solid ${s.color}22">"${alerta.comentarioResolucion}"</div>` : ''}
    </div>`;
}

function openCommentAlertaModal(rowId, comentIdx) {
  activeCommentAlertaRowId = rowId;
  activeCommentAlertaIdx = comentIdx;
  selectedCommentResultado = null;
  const r = ROWS.find(x => x.id === rowId);
  if (!r) return;
  const alerta = r.comentarios[comentIdx] && r.comentarios[comentIdx].alerta;
  if (!alerta) return;
  const fechaEl = document.getElementById('cg-fecha');
  if (fechaEl) fechaEl.textContent = fmtAlertaDate(alerta.fechaAlerta, alerta.hora);
  const commentEl = document.getElementById('cg-comment');
  if (commentEl) commentEl.value = '';
  const errEl = document.getElementById('cg-error');
  if (errEl) errEl.style.display = 'none';
  const btnR = document.getElementById('cg-btn-realizado');
  const btnC = document.getElementById('cg-btn-cancelado');
  if (btnR) btnR.classList.remove('active');
  if (btnC) btnC.classList.remove('active');
  const modal = document.getElementById('comment-gestionar-modal');
  if (modal) modal.classList.add('open');
}

function closeCommentAlertaModal(e) {
  const modal = document.getElementById('comment-gestionar-modal');
  if (!modal) return;
  if (e && e.target !== modal) return;
  modal.classList.remove('open');
}

function selectCommentResultado(val, btn) {
  selectedCommentResultado = val;
  const btnR = document.getElementById('cg-btn-realizado');
  const btnC = document.getElementById('cg-btn-cancelado');
  if (btnR) btnR.classList.remove('active');
  if (btnC) btnC.classList.remove('active');
  btn.classList.add('active');
}

function confirmCommentAlerta() {
  const comentario = (document.getElementById('cg-comment') || {}).value || '';
  const errEl = document.getElementById('cg-error');
  if (!selectedCommentResultado || !comentario.trim()) {
    if (errEl) errEl.style.display = 'block';
    return;
  }
  if (errEl) errEl.style.display = 'none';
  const r = ROWS.find(x => x.id === activeCommentAlertaRowId);
  if (!r) return;
  const alerta = r.comentarios[activeCommentAlertaIdx] && r.comentarios[activeCommentAlertaIdx].alerta;
  if (!alerta) return;
  alerta.estado = selectedCommentResultado;
  alerta.comentarioResolucion = comentario.trim();
  const modal = document.getElementById('comment-gestionar-modal');
  if (modal) modal.classList.remove('open');
  renderCommentList(r.comentarios);
  if (typeof renderAlertas === 'function') renderAlertas();
}

function renderCommentList(comments) {
  const list = document.getElementById('comment-list');
  if (!comments.length) {
    list.innerHTML = `<div style="color:var(--gray-text);font-size:13px;text-align:center;padding:24px 0">Sin comentarios aún.</div>`;
    return;
  }
  list.innerHTML = comments.map((c, i) => `
    <div class="comment-item">
      <div class="comment-meta">
        <div class="comment-avatar">${c.iniciales}</div>
        <span class="comment-author">${c.autor}</span>
        <span class="comment-date">${c.fecha}</span>
      </div>
      <div class="comment-text">${c.texto}</div>
      ${c.alerta ? renderAlertaBadge(c.alerta, i) : ''}
    </div>
  `).join('');
  list.scrollTop = list.scrollHeight;
}

function toggleAlertaRow(checkbox) {
  const row = document.getElementById('alerta-fields-row');
  if (row) row.style.display = checkbox.checked ? 'flex' : 'none';
}

function addComment() {
  const input = document.getElementById('comment-input');
  const text = input.value.trim();
  if (!text) return;
  const r = ROWS.find(x => x.id === activeCommentId);
  if (!r) return;
  const nuevoComentario = { autor:'Ramiro Guerrero', iniciales:'RG', fecha:'09 jun 2026', texto: text };
  const alertaCheck = document.getElementById('add-alerta-check');
  if (alertaCheck && alertaCheck.checked) {
    const fechaEl = document.getElementById('alerta-fecha');
    const horaEl  = document.getElementById('alerta-hora');
    if (fechaEl && fechaEl.value && horaEl && horaEl.value) {
      nuevoComentario.alerta = { fechaAlerta: fechaEl.value, hora: horaEl.value, estado: 'pendiente' };
    }
  }
  r.comentarios.push(nuevoComentario);
  input.value = '';
  if (alertaCheck) { alertaCheck.checked = false; const row = document.getElementById('alerta-fields-row'); if (row) row.style.display = 'none'; }
  renderCommentList(r.comentarios);
  if (typeof renderCards  === 'function') renderCards();
  if (typeof renderTable  === 'function') renderTable();
  if (typeof renderAlertas === 'function') renderAlertas();
}

/* ── PROB INLINE/MODAL ── */
let selectedProbOpt = 'Alto';

function updateProbInlineBtn(prob) {
  const btn = document.getElementById('prob-inline-btn');
  if (!btn) return;
  const s = PROB_STYLES[prob];
  btn.textContent = '● ' + prob;
  btn.style.background = s.bg;
  btn.style.color = s.color;
}

function openProbModal() {
  const r = ROWS.find(x => x.id === activeCommentId);
  if (!r) return;
  selectedProbOpt = r.prob;
  document.querySelectorAll('.prob-opt-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('popt-' + r.prob.toLowerCase()).classList.add('active');
  document.getElementById('prob-comment-input').value = '';
  document.getElementById('prob-modal').classList.add('open');
}
function closeProbModal(e) {
  if (e && e.target !== document.getElementById('prob-modal')) return;
  document.getElementById('prob-modal').classList.remove('open');
}
function selectProbOpt(val, btn) {
  selectedProbOpt = val;
  document.querySelectorAll('.prob-opt-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}
function confirmProb() {
  const r = ROWS.find(x => x.id === activeCommentId);
  if (!r) return;
  const comentario = document.getElementById('prob-comment-input').value.trim();
  if (!comentario) { document.getElementById('prob-comment-input').style.borderColor = 'var(--red)'; return; }
  document.getElementById('prob-comment-input').style.borderColor = 'var(--gray-line)';
  if (!PROB_HISTORY[r.id]) PROB_HISTORY[r.id] = [];
  PROB_HISTORY[r.id].push({ iniciales:'RG', autor:'Ramiro Guerrero', fecha:'09 jun 2026', prob: selectedProbOpt, comentario });
  r.prob = selectedProbOpt;
  updateProbInlineBtn(selectedProbOpt);
  document.getElementById('prob-modal').classList.remove('open');
  if (typeof renderCards  === 'function') renderCards();
  if (typeof renderTable  === 'function') renderTable();
}

function openProbHistory() {
  const r = ROWS.find(x => x.id === activeCommentId);
  if (!r) return;
  const history = PROB_HISTORY[r.id] || [];
  const body = document.getElementById('prob-history-body');
  if (!history.length) {
    body.innerHTML = `<div style="color:var(--gray-text);font-size:13px;text-align:center;padding:24px 0">Sin cambios de probabilidad registrados.</div>`;
  } else {
    body.innerHTML = history.map(h => `
      <div class="prob-history-item">
        <div class="prob-history-avatar">${h.iniciales}</div>
        <div class="prob-history-info" style="flex:1">
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
            <span class="prob-history-name">${h.autor}</span>
            <span class="prob-history-date">${h.fecha}</span>
            <span class="prob-tag ${h.prob.toLowerCase()}">${h.prob}</span>
          </div>
          ${h.comentario ? `<div class="estado-history-comment">${h.comentario}</div>` : ''}
        </div>
      </div>
    `).join('');
  }
  document.getElementById('prob-history-modal').classList.add('open');
}
function closeProbHistory(e) {
  if (e && e.target !== document.getElementById('prob-history-modal')) return;
  document.getElementById('prob-history-modal').classList.remove('open');
}

/* ── ESTADO MODAL ── */
let selectedEstadoOpt = 'proceso';

function updateEstadoInlineBtn(estado, motivo, pipeline) {
  const btn = document.getElementById('estado-inline-btn');
  if (!btn) return;
  btn.textContent = ESTADO_LABELS[estado] || estado;
  btn.style.color = ESTADO_COLORS[estado] || 'var(--text)';
  const estadoInnerRow = btn.parentElement;

  let motivoEl = document.getElementById('motivo-inline');
  if (estado === 'perdido' && motivo) {
    if (!motivoEl) { motivoEl = document.createElement('span'); motivoEl.id = 'motivo-inline'; if (estadoInnerRow) estadoInnerRow.appendChild(motivoEl); }
    motivoEl.style.cssText = 'font-size:11px;font-weight:600;color:var(--white);background:var(--red);border-radius:6px;padding:3px 10px;display:inline-block;width:fit-content';
    motivoEl.textContent = motivo;
  } else if (motivoEl) { motivoEl.remove(); }

  const pipelineBtn = document.getElementById('pipeline-inline-btn');
  const pipelineSep = document.getElementById('pipeline-sep');
  if (estado === 'proceso' && pipeline) {
    if (pipelineBtn) { pipelineBtn.textContent = 'Pipeline: ' + pipeline; pipelineBtn.style.display = 'inline'; }
    if (pipelineSep) pipelineSep.style.display = 'inline';
  } else {
    if (pipelineBtn) pipelineBtn.style.display = 'none';
    if (pipelineSep) pipelineSep.style.display = 'none';
  }
}

function openEstadoModal() {
  const r = ROWS.find(x => x.id === activeCommentId);
  if (!r) return;
  selectedEstadoOpt = r.estado;
  document.querySelectorAll('.estado-opt-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('opt-' + r.estado).classList.add('active');
  document.getElementById('estado-comment-input').value = '';
  document.getElementById('motivo-select').value = r.motivoPerdida || '';
  document.getElementById('motivo-row').style.display = r.estado === 'perdido' ? 'flex' : 'none';
  document.getElementById('pipeline-select').value = r.pipeline || '';
  document.getElementById('pipeline-row').style.display = r.estado === 'proceso' ? 'flex' : 'none';
  document.getElementById('estado-modal').classList.add('open');
}
function closeEstadoModal(e) {
  if (e && e.target !== document.getElementById('estado-modal')) return;
  document.getElementById('estado-modal').classList.remove('open');
}
function selectEstadoOpt(val, btn) {
  selectedEstadoOpt = val;
  document.querySelectorAll('.estado-opt-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('motivo-row').style.display = val === 'perdido' ? 'flex' : 'none';
  if (val !== 'perdido') document.getElementById('motivo-select').value = '';
  document.getElementById('pipeline-row').style.display = val === 'proceso' ? 'flex' : 'none';
  if (val !== 'proceso') document.getElementById('pipeline-select').value = '';
}
function confirmEstado() {
  const r = ROWS.find(x => x.id === activeCommentId);
  if (!r) return;
  const comentario = document.getElementById('estado-comment-input').value.trim();
  if (!comentario) { document.getElementById('estado-comment-input').style.borderColor = 'var(--red)'; return; }
  document.getElementById('estado-comment-input').style.borderColor = 'var(--gray-line)';
  const motivo   = selectedEstadoOpt === 'perdido' ? document.getElementById('motivo-select').value : null;
  const pipeline = selectedEstadoOpt === 'proceso'  ? document.getElementById('pipeline-select').value : null;
  if (!ESTADO_HISTORY[r.id]) ESTADO_HISTORY[r.id] = [];
  ESTADO_HISTORY[r.id].push({ iniciales:'RG', autor:'Ramiro Guerrero', fecha:'09 jun 2026', estado: selectedEstadoOpt, comentario, motivo, pipeline });
  r.estado = selectedEstadoOpt;
  r.motivoPerdida = selectedEstadoOpt === 'perdido' ? motivo : null;
  if (selectedEstadoOpt === 'proceso') r.pipeline = pipeline;
  if (selectedEstadoOpt !== 'proceso') r.fechaGestion = '09 jun 2026';
  updateEstadoInlineBtn(selectedEstadoOpt, motivo, pipeline);
  document.getElementById('estado-modal').classList.remove('open');
  if (typeof renderCards  === 'function') renderCards();
  if (typeof renderTable  === 'function') renderTable();
}

function openEstadoHistory() {
  const r = ROWS.find(x => x.id === activeCommentId);
  if (!r) return;
  const history = ESTADO_HISTORY[r.id] || [];
  const body = document.getElementById('estado-history-body');
  const LABELS = { proceso: 'En proceso', ganado: 'Ganado', perdido: 'Perdido' };
  if (!history.length) {
    body.innerHTML = `<div style="color:var(--gray-text);font-size:13px;text-align:center;padding:24px 0">Sin cambios de estado registrados.</div>`;
  } else {
    body.innerHTML = history.map(h => `
      <div class="estado-history-item">
        <div class="prob-history-avatar">${h.iniciales}</div>
        <div class="prob-history-info" style="flex:1">
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
            <span class="prob-history-name">${h.autor}</span>
            <span class="prob-history-date">${h.fecha}</span>
            <span class="estado-tag ${h.estado}">${LABELS[h.estado]}</span>
            ${h.motivo   ? `<span style="font-size:10px;font-weight:600;background:var(--red-light);color:var(--red);border-radius:20px;padding:2px 8px">${h.motivo}</span>` : ''}
            ${h.pipeline ? `<span style="font-size:10px;font-weight:600;background:#EEF0FF;color:var(--blue);border-radius:20px;padding:2px 8px">${h.pipeline}</span>` : ''}
          </div>
          <div class="estado-history-comment">${h.comentario}</div>
        </div>
      </div>
    `).join('');
  }
  document.getElementById('estado-history-modal').classList.add('open');
}
function closeEstadoHistory(e) {
  if (e && e.target !== document.getElementById('estado-history-modal')) return;
  document.getElementById('estado-history-modal').classList.remove('open');
}

/* ── EJECUTIVO ASIGNADO ── */
let selectedEjecutivo = null;

function updateEjecutivoInlineBtn(ejecutivo) {
  const btn = document.getElementById('ejecutivo-inline-btn');
  if (!btn) return;
  btn.textContent = ejecutivo || 'Sin asignar';
}

function openEjecutivoModal() {
  const r = ROWS.find(x => x.id === activeCommentId);
  if (!r) return;
  selectedEjecutivo = r.ejecutivo;
  const body = document.getElementById('ejecutivo-modal-body');
  body.innerHTML = EJECUTIVOS.map(nombre => `
    <button class="estado-opt-btn ${nombre === selectedEjecutivo ? 'active' : ''}" style="width:100%;text-align:left" onclick="selectEjecutivoOpt('${nombre}', this)">${nombre}</button>
  `).join('');
  document.getElementById('ejecutivo-modal').classList.add('open');
}
function closeEjecutivoModal(e) {
  if (e && e.target !== document.getElementById('ejecutivo-modal')) return;
  document.getElementById('ejecutivo-modal').classList.remove('open');
}
function selectEjecutivoOpt(nombre, btn) {
  selectedEjecutivo = nombre;
  btn.parentElement.querySelectorAll('.estado-opt-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}
function confirmEjecutivo() {
  const r = ROWS.find(x => x.id === activeCommentId);
  if (!r) return;
  if (selectedEjecutivo && selectedEjecutivo !== r.ejecutivo) {
    if (!EJECUTIVO_HISTORY[r.id]) EJECUTIVO_HISTORY[r.id] = [];
    EJECUTIVO_HISTORY[r.id].push({ iniciales:'RG', autor:'Ramiro Guerrero', fecha:'09 jun 2026', ejecutivoAnterior: r.ejecutivo, ejecutivoNuevo: selectedEjecutivo });
    r.ejecutivo = selectedEjecutivo;
    updateEjecutivoInlineBtn(r.ejecutivo);
  }
  document.getElementById('ejecutivo-modal').classList.remove('open');
}

function openEjecutivoHistory() {
  const r = ROWS.find(x => x.id === activeCommentId);
  if (!r) return;
  const history = EJECUTIVO_HISTORY[r.id] || [];
  const body = document.getElementById('ejecutivo-history-body');
  if (!history.length) {
    body.innerHTML = `<div style="color:var(--gray-text);font-size:13px;text-align:center;padding:24px 0">Sin cambios de ejecutivo asignado registrados.</div>`;
  } else {
    body.innerHTML = history.map(h => `
      <div class="estado-history-item">
        <div class="prob-history-avatar">${h.iniciales}</div>
        <div class="prob-history-info" style="flex:1">
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
            <span class="prob-history-name">${h.autor}</span>
            <span class="prob-history-date">${h.fecha}</span>
          </div>
          <div class="estado-history-comment">${h.ejecutivoAnterior} → ${h.ejecutivoNuevo}</div>
        </div>
      </div>
    `).join('');
  }
  document.getElementById('ejecutivo-history-modal').classList.add('open');
}
function closeEjecutivoHistory(e) {
  if (e && e.target !== document.getElementById('ejecutivo-history-modal')) return;
  document.getElementById('ejecutivo-history-modal').classList.remove('open');
}
