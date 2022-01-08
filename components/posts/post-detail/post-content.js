import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";

export default function PostContent({ image, title, date, summary }) {
  return (
    <article className="flex flex-col gap-y-12">
      <PostHeader image={DUMMY_POST.image} title={DUMMY_POST.title} />
      <ReactMarkdown className="prose prose-invert">{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}

const DUMMY_POST = {
  title: "Post 4",
  slug: "post-4",
  date: "2020-01-01",
  summary: "This is a post",
  content: `# Petit illi fulvis o extrema

  ## Multi scelus freta latratibus me donis videri
  
  Lorem markdownum dolore relevare massa sanguine et squamis discenda; est.
  Coronat et indignantia spumosis magni exaudi vultus *sistere* sentit tumescunt
  quaerit fuit loton, tam. In aras **deterruit vias coniugium** movent devovitque
  me habeat, conscia soluto viribus lentae, unum **sua glaebam** rabies relinquit.
  
  - Nisi obstipuit differt
  - Fere ubi vulnera partus idcirco Amphitryon depulsum
  - Finem captam
  - Quod humanas nodosque
  - Fatentur radice parens
  - Veterum Achilles ad flecti Haec te ait
  
  Materiam fatale saxa diversaque et spargit pastor ter quid se utile erat avia
  Ulixes adfuit. Quae invidit pensas. Manus in sequi, auxiliaribus datis, graves
  ad *paratus Famem* fronte caput thalamo sedibus: haec genitor.
  
  - Inpetus cacumine mallet
  - Sed quo inperfectus
  - Fatum clausit poposcerat nequeo
  - Et laudat montes morsibus vestrae Achilles
  - Mugitus visamque excusare conata atque fibula propulit
  - Tutus aeterna
  
  ## Qui victa Iunonem
  
  Nocte iam Icelon, ut nec agricolis Molossa ignibus inmensi ferum aliter
  deciderant via matrem! Dolor nostros clavam. Morientem illos quem vulnere
  **illos**! Modo quaeque crimina una: nec humo sonantia prodest, vipereos, fallax
  opus.
  
  > Apollinis maternaque manu restagnantis tumidaeque formaeque latratu volucres
  > ignibus. Gemitumque tegit in Dianae fuere abire arboris disceditis inrorant o
  > tandem meumque, breve fictumque lacerata truncaque qui parvo.
  
  Ambage dabat simul. Praerupit se ignibus amores. Longi me inque sensimus pudicam
  sollicitumque [summo opacae](http://potest.io/) contentis **mille dubiam
  Hippason** longa quod nostra. Perlucida plangit. Causa Neritius ipsa traxerat
  legatur alii magis qualia, campus.
  
  Non qui: illi erat porrigit Partheniumque carpit saepe Curibus **danda**? Morari
  motus timentia invitique nomenque pulcherrime procul.
  
  Si removit dicere territa capro: senex famulus Ithaco. Numine omnisque litora
  latebant.`,
  image: {
    src: "/ouael-ben-salah-Hqb-daSdX10-unsplash.jpeg",
    alt: "Image showing Yunus Kerem Turk",
  },
};
