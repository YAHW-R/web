const promesas = {
    1: [`Yo estaré contigo y te guardaré por dondequiera que vayas.<br>( Genesis 28:15 )`, `Genesis 28:15`],
    2: [`Porque yo Jehová soy tu Dios, quien te sostiene de tu mano derecha y te dice: No temas, yo te ayudo.<br>( Isaías 41:13 )`, `Isaías 41:13`],
    3: [`Pero los que esperan a Jehová tendrán nuevas fuerzas; levantarán alas como las águilas. <br>( Isaías 40:31 )`, `Isaías 40:31`],
    4: [`El ángel de Jehová acampa alrededor de los que le temen, y los defiende.<br> ( Salmos 34:7 )`, `Salmos 34:7`],
    5: [`No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te fortalezco; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia.<br> ( Isaías 41:10 )`, `Isaías 41:10`],
    6: [`Jehová es mi pastor; nada me faltará. <br>( Salmos 23:1 )`, `Salmos 23:1`],
    7: [`Dios colmará con magnificencia todas las necesidades de ustedes, conforme a su riqueza, en Cristo Jesús.<br> ( Filpenses 4:19 )`, `Filpenses 4:19`],
    8: [`El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente.<br> ( Salmos 91:1 )`, `Salmos 91:1`],
    9: [`Porque yo Jehová soy tu Dios, quien te sostiene de tu mano derecha y te dice: No temas, yo te ayudo.<br> ( Isaías 41:13 )`, `Isaías 41:13`],
    10: [`Yo te instruiré y te enseñaré el camino en que debes andar; te guiaré con mis ojos.<br> ( Salmos 32:8 )`, `Salmos 32:8`],
    11: [`Encomienda tu suerte al Señor, confía en él, y él hará su obra.<br> ( Salmos 37:4 )`, `Salmos 37:4`],
    12: [`Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis. <br> ( Jeremías 29:11 )`, `Jeremías 29:11`],
    13: [`Deléitate asimismo en Jehová,

    Y él te concederá las peticiones de tu corazón.<br> ( Samo 37:4 )`, `Samo 37:4`],

    14: [`Dios no es hombre, para que mienta,

    Ni hijo de hombre para que se arrepienta.
    
    Él dijo, ¿y no hará?
    
    Habló, ¿y no lo ejecutará?.<br> ( Números 23:19 )`, `Números 23:19`],
    15: [`Te haré entender, y te enseñaré el camino en que debes andar;

     Sobre ti fijaré mis ojos.<br> ( Salmo 32:8 )`, `Salmo 32:8`],

    16: [`Porque para vosotros es la promesa, y para vuestros hijos, y para todos los que están lejos; para cuantos el Señor nuestro Dios llamare.<br> ( Hechos 2:39 )`, `Hechos 2:39`],
    17: [`En la casa de mi Padre muchas moradas hay; si así no fuera, yo os lo hubiera dicho; voy, pues, a preparar lugar para vosotros. Y si me fuere y os preparare lugar, vendré otra vez, y os tomaré a mí mismo, para que donde yo estoy, vosotros también estéis.<br> ( Juan 14:2-3 )`, `Juan 14:2-3`],
    18: [`Y yo os digo: Pedid, y se os dará; buscad, y hallaréis; llamad, y se os abrirá. Porque todo aquel que pide, recibe; y el que busca, halla; y al que llama, se le abrirá.<br> ( Lucas 11:9-10 )`, `Lucas 11:9-10`],
    19: [`Os daré corazón nuevo, y pondré espíritu nuevo dentro de vosotros; y quitaré de vuestra carne el corazón de piedra, y os daré un corazón de carne.<br> ( Ezequiel 36:26 )`, `Ezequiel 36:26`],
    20: [`El Señor no retarda su promesa, según algunos la tienen por tardanza, sino que es paciente para con nosotros, no queriendo que ninguno perezca, sino que todos procedan al arrepentimiento.<br> ( 2 Pedro 3:9 )`, `2 Pedro 3:9`],
    21: [`Mi Dios, pues, suplirá toda necesidad vuestra, conforme a sus riquezas en gloria en Cristo Jesús. <br> ( Filipenses 4:19 )`, `Filipenses 4:19`]
}

const versiculos = {
    1: [`El amor es paciente, es bondadoso. El amor no es envidioso ni jactancioso ni orgulloso. No se comporta con rudeza, no es egoísta, no se enoja fácilmente, no guarda rencor.<br>
    (1 Corintios 13:4-5)
    `, `1+Corintios+13+:+4+5`],
    2: [`Estén siempre alegres, oren sin cesar, den gracias a Dios en toda situación, porque esta es su voluntad para ustedes en Cristo Jesús.<br>
    (1 Tesalonicenses 5:16-18)`, `1+Tesalonicenses+5+:+16+18`],
    3: [`No se inquieten por nada; más bien, en toda ocasión, con oración y ruego, presenten sus peticiones a Dios y denle gracias. Y la paz de Dios, que sobrepasa todo entendimiento, cuidará sus corazones y sus pensamientos en Cristo Jesús.<br>
    (Filipenses 4:6-7)`, `Filipenses+4+:+6+7`],
    4: [`El Señor te bendiga y te guarde;
    el Señor te mire con agrado
    y te extienda su amor;
    el Señor te muestre su favor
    y te conceda la paz.<br>
    (Números 6:24-26)`, `Números+6+:+24+26`],
    5: [`Pero los que confían en el Señor
    renovarán sus fuerzas;
    volarán como las águilas:
    correrán y no se fatigarán,
    caminarán y no se cansarán.<br>
    (Isaías 40:31)`, `Isaías+40+:+31`],
    6: [`Grábate en el corazón estas palabras que hoy te mando. Incúlcaselas continuamente a tus hijos. Háblales de ellas cuando estés en tu casa y cuando vayas por el camino, cuando te acuestes y cuando te levantes.<br>
    (Deuteronomio 6:6-7)`, `Deuteronomio+6+:+6+7`],
    7: [`Bendito el hombre que confía en el Señor
    y pone su confianza en él.
    Será como un árbol plantado junto al agua,
    que extiende sus raíces hacia la corriente;
    no teme que llegue el calor,
    y sus hojas están siempre verdes.
    En época de sequía no se angustia,
    y nunca deja de dar fruto.<br>
    (Jeremías 17:7-8)`, `Jeremías+:+17+7+8`],
    8: [`Hagan todo con amor.
    (1 Corintios 16:14)`, `1+Corintios+16+:+14`],
    9: [`Pon en manos del Señor todas tus obras,
    y tus proyectos se cumplirán.<br>
    (Proverbios 16:3)`, `Proverbios+16+:+3`],
    10: [`Le pido que, por medio del Espíritu y con el poder que procede de sus gloriosas riquezas, los fortalezca a ustedes en lo íntimo de su ser, para que por fe Cristo habite en sus corazones. Y pido que, arraigados y cimentados en amor.<br>
    (Efesios 3:16-17)`, `Efesios+3+:+16+17`],
    11: [`Por la mañana hazme saber de tu gran amor,
    porque en ti he puesto mi confianza.
    Señálame el camino que debo seguir,
    porque a ti elevo mi alma.<br>
    (Salmo 143:8)`, `Salmo+143+:+8`],
    12: [`Mas buscad primeramente el reino de Dios y su justicia, y todas estas cosas os serán añadidas.<br> ( Mateo 6:33 )`, `Mateo 6:33`],
    13: [`Haya, pues, en vosotros este sentir que hubo también en Cristo Jesús, el cual, siendo en forma de Dios, no estimó el ser igual a Dios como cosa a que aferrarse, sino que se despojó a sí mismo, tomando forma de siervo, hecho semejante a los hombres; y estando en la condición de hombre, se humilló a sí mismo, haciéndose obediente hasta la muerte, y muerte de cruz. <br. ( Filipenses 2:5-8 )`, `Filipenses 2:5-8`],
    14: [`Si decimos que no tenemos pecado, nos engañamos a nosotros mismos, y la verdad no está en nosotros. Si confesamos nuestros pecados, él es fiel y justo para perdonar nuestros pecados, y limpiarnos de toda maldad. <br> ( 1 Juan 1:8-9 )`, `1 Juan 1:8-9`],
    15: [`Este Jesús es la piedra reprobada por vosotros los edificadores, la cual ha venido a ser cabeza del ángulo. Y en ningún otro hay salvación; porque no hay otro nombre bajo el cielo, dado a los hombres, en que podamos ser salvos. <br>( Hechos 4:11-12 )`, `Hechos 4:11-12`],
    16: [`Porque hay un solo Dios, y un solo mediador entre Dios y los hombres, Jesucristo hombre, el cual se dio a sí mismo en rescate por todos, de lo cual se dio testimonio a su debido tiempo. <br> ( 1 Timoteo 2:5-6 )`, `1 Timoteo 2:5-6`],
    17: [`ahora bien, sabemos que Dios dispone todas las cosas para el bien de quienes lo aman, los que han sido llamados conforme a su propósito. <br> ( Romano 8:28 )`, `Romano 8:28`],
    18: [`Yo sé los planes que tengo para ustedes, planes para su bienestar y no para su mal, a fin de darles un futuro lleno de esperanza. Yo, el Señor, lo afirmo. <br> ( Juan 3:16 )`, `Juan 3:16`],
    19: [`No os amoldéis al mundo actual, sino sed transformados mediante la renovación de vuestra mente. Así podréis comprobar cuál es la voluntad de Dios, buena, agradable y perfecta. <br> ( Romanos 12:2 )`, `Romanos 12:2`],
    20: [`Id, pues, y haced discípulos a los habitantes de todas las naciones, bautizándolos en el nombre del Padre, del Hijo y del Espíritu Santo. <br> ( Mateo 28:19 )`, `Mateo 28:19`],
    21: [`En todo tiempo ama el amigo;
    para ayudar en la adversidad nació el hermano.<br>
    ( Proverbios 17:17 )`, `Proverbios 17:17`]
}

const alabanza = {
    1: [`¡Alaba hoy a Dios con todo tu corazón!
    ¡Alaben al Señor, naciones todas!
    ¡Pueblos todos, cántenle alabanzas!
    ¡Grande es su amor por nosotros!
    ¡La fidelidad del Señor es eterna!
    ¡Aleluya! ¡Alabado sea el Señor!<br>
    (Salmo 117)`, `Salmo 117`],
    2: [`Te exaltaré, mi Dios y Rey;
    por siempre bendeciré tu nombre.
    Todos los días te bendeciré;
    por siempre alabaré tu nombre.<br>
    (Salmo 145:1-2)`, `Salmo 145:1-2`],
    3: [`¡Aleluya! ¡Alabado sea el Señor!
    Alaben a Dios en su santuario,
    alábenlo en su poderoso firmamento.
    Alábenlo por sus proezas,
    alábenlo por su inmensa grandeza.
    Alábenlo con sonido de trompeta,
    alábenlo con el arpa y la lira.
    Alábenlo con panderos y danzas,
    alábenlo con cuerdas y flautas.
    Alábenlo con címbalos sonoros,
    alábenlo con címbalos resonantes. <br>
    
    ¡Que todo lo que respira alabe al Señor!
    ¡Aleluya!<br>
    (Salmo 150)`, `Salmo 150`],
    4: [`Vengan, cantemos con júbilo al Señor;
    aclamemos a la roca de nuestra salvación.
    Lleguemos ante él con acción de gracias,
    aclamémoslo con cánticos.
    Porque el Señor es el gran Dios,
    el gran Rey sobre todos los dioses.<br>
    (Salmo 95:1-3)`, `Salmo 95:1-3`],
    5: [`Canten al Señor con alegría, ustedes los justos;
    es propio de los íntegros alabar al Señor.
    Alaben al Señor al son del arpa;
    entonen alabanzas con el decacordio.
    Cántenle una canción nueva;
    toquen con destreza,
    y den voces de alegría.<br>
    (Salmo 33:1-3)`, `Salmo 33:1-3`],
    6: [`Señor, tú eres mi Dios;
    te exaltaré y alabaré tu nombre
    porque has hecho maravillas.
    Desde tiempos antiguos
    tus planes son fieles y seguros.<br>
    (Isaías 25:1)`, `Isaías 25:1`],
    7: [`Tu amor es mejor que la vida;
    por eso mis labios te alabarán.
    Te bendeciré mientras viva,
    y alzando mis manos te invocaré.<br>
    (Salmo 63:3-4)`, `Salmo 63:3-4`],
    8: [`El Señor es mi fuerza y mi escudo;
    mi corazón en él confía;
    de él recibo ayuda.
    Mi corazón salta de alegría,
    y con cánticos le daré gracias.<br>
    (Salmo 28:7)`, `Salmo 28:7`],
    9: [`Alaba, alma mía, al Señor;
    alabe todo mi ser su santo nombre.<br>
    (Salmo 103:1)`, 'Salmo 103:1'],
    10: [`Y oí a cuanta criatura hay en el cielo, y en la tierra, y debajo de la tierra y en el mar, a todos en la creación, que cantaban: «¡Al que está sentado en el trono y al Cordero, sean la alabanza y la honra, la gloria y el poder, por los siglos de los siglos!<br>
    (Apocalipsis 5:13)`, 'Apocalipsis 5:13'],
    11: [`Que habite en ustedes la palabra de Cristo con toda su riqueza: instrúyanse y aconséjense unos a otros con toda sabiduría; canten salmos, himnos y canciones espirituales a Dios, con gratitud de corazón.<br>
    (Colosenses 3:16)`, 'Colosenses 3:16'],
    12: [`Den gracias al Señor, invoquen su nombre;
    den a conocer sus obras entre las naciones. <br>
    ( Salmo 105:1 )`, `Salmo 105:1`],
    13: [`Te exaltaré, mi Dios y rey;
    por siempre bendeciré tu nombre.<br>
    ( Salmo 145:1 )`, `Salmo 145:1`],
    14: [`Sáname, Señor, y seré sanado;
    sálvame y seré salvado,
    porque tú eres mi alabanza.<br>
    ( Jeremías 17:14 )`, `Jeremías 17:14`],
    15: [`Te alabaré, Señor, entre los pueblos;
    te cantaré salmos entre las naciones.<br>
    ( Salmo 108:3 )`, `Salmo 108:3`],
    16: [`Alabado sea Dios, Padre de nuestro Señor Jesucristo, que nos ha bendecido en las regiones celestiales con toda bendición espiritual en Cristo.<br>
    ( Efesios 1:3 )`, `Efesios 1:3`],
    17: [`Confío en Dios y alabo su palabra;
    confío en Dios y no siento miedo.
    ¿Qué puede hacerme un simple mortal?<br>
    (Salmo 56:4)`, `Salmo 56:4`],
    18: [`Te alabaré con integridad de corazón,
    cuando aprenda tus justos juicios.<br>
    (Salmo 119:7)`, `Salmo 119:7`],
    19: [`A ti, Dios de mis padres,
    te alabo y te doy gracias.
    Me has dado sabiduría y poder,
    me has dado a conocer lo que te pedimos,
    ¡me has dado a conocer el sueño del rey!<br>
    (Daniel 2:23)`, `Daniel 2:23`],
    20: [`Venid, celebremos alegremente á Jehová: Cantemos con júbilo á la roca de nuestra salud. Lleguemos ante su acatamiento con alabanza; Aclamémosle con cánticos.<br> (Salmos 95:1-2)`, `Salmos 95:1-2`],
    21: [`Con cántico alabaré el nombre de Dios, y con acción de gracias le exaltaré.<br> (Salmos 69:30)`, `Salmos 69:30`]
}






const numeroRandom = () => {
    let numero = Math.random();

    numero = numero * 20;

    numero = Math.round(numero);

    numero++;

    return numero
}

const agrgarPromesa = () => {
    let numero = numeroRandom();

    let Random = promesas[numero][0];

    return [Random, numero];
}

const agrgarVersiculo = () => {
    let numero = numeroRandom();

    let Random = versiculos[numero][0];

    return [Random, numero];
}

const agregarAlabanza = () => {
    let numero = numeroRandom();

    let Random = alabanza[numero][0];

    return [Random, numero];
}




const versiculoDelDia = agrgarVersiculo();
const promesaDelDia = agrgarPromesa();
const alabanzaDelDia = agregarAlabanza();

const parrafoDeVersiculo = document.querySelector(`.versiculo`);

const parrafoDePromesa = document.querySelector(`.promesa`);

const parrafoDeAlabanza = document.querySelector(`.alabanza`);


parrafoDeVersiculo.innerHTML = (versiculoDelDia[0]);
parrafoDePromesa.innerHTML = (promesaDelDia[0]);
parrafoDeAlabanza.innerHTML = (alabanzaDelDia[0]);


const elVersiculo = versiculoDelDia[1];
const laPromesa = promesaDelDia[1];
const laAlabanza = alabanzaDelDia[1];



const linkDeVersiculo = document.querySelector(`.link__versiculo`);
const linkDePromesa = document.querySelector(`.link__promesa`);

const linkDeAlabanza = document.querySelector(`.link__alabanza`)

linkDeVersiculo.setAttribute(`href`, `https://www.google.com/search?q=${versiculos[elVersiculo][1]}+reina+valera+1960&oq=1+de+corint&gs_lcrp=EgZjaHJvbWUqBwgFEAAYgAQyBggAEEUYOTIHCAEQLhiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABNIBCTE5NzEzajBqN6gCALACAA&sourceid=chrome&ie=UTF-8`);

linkDePromesa.setAttribute(`href`, `https://www.google.com/search?q=${promesas[laPromesa][1]}+reina+valera+1960&oq=1+de+corint&gs_lcrp=EgZjaHJvbWUqBwgFEAAYgAQyBggAEEUYOTIHCAEQLhiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABNIBCTE5NzEzajBqN6gCALACAA&sourceid=chrome&ie=UTF-8`);

linkDeAlabanza.setAttribute(`href`, `https://www.google.com/search?q=${alabanza[laAlabanza][1]}+reina+valera+1960&oq=1+de+corint&gs_lcrp=EgZjaHJvbWUqBwgFEAAYgAQyBggAEEUYOTIHCAEQLhiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABNIBCTE5NzEzajBqN6gCALACAA&sourceid=chrome&ie=UTF-8`);
