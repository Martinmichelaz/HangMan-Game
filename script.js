let gameName = "Hangman Game";
document.title = gameName;
document.querySelector("h1").textContent = gameName;
document.querySelector("footer").textContent = `${gameName} had made by martin michel`;

let randomIndex=0;
randomItem='';

localStorage.setItem("score", localStorage.getItem("score") || 0);
let scoreP = document.querySelector(".score p");
scoreP.textContent = `your score is : ${localStorage.getItem("score")}`;

const hangedManImages=[
  "https://i.imgur.com/kReMv94.png",
  "https://i.imgur.com/UFP8RM4.png",
  "https://i.imgur.com/9McnEXg.png",
  "https://i.imgur.com/vNAW0pa.png",
  "https://i.imgur.com/8UFWc9q.png",
  "https://i.imgur.com/rHCgIvU.png",
  "https://i.imgur.com/CtvIEMS.png",
  "https://i.imgur.com/Z2mPdX0.png"
];

const wordsByLength = {

  3: {
    fruits:    ["fig","haw","hip","paw","ume","slo","plm","mng","grp","pch",
                "lem","olv","pap","org","ban","apr","str","avo","pom","dat",
                "mel","che","kum","gac","ras","bla","goo","cra","lon","boy",
                "per","nec","tan","lit","ran","tam","eld","mul","brd","jac",
                "gua","jab","ros","cit","dew","qua","pin","man","lch","sou"],

    countries: ["usa","gbr","fra","deu","jpn","chn","ind","bra","rus","aus",
                "ita","esp","can","mex","tur","pol","nld","swe","nor","dnk",
                "fin","bel","aut","che","prt","irl","nzl","arg","chl","col",
                "phl","pak","kor","tha","idn","mys","sgp","hkg","twn","irn",
                "irq","egy","mar","dza","tun","nig","gha","ken","zaf","eth"],

    animals:   ["ant","bat","bee","cat","cod","cow","dog","elk","emu","fox",
                "gnu","hen","jay","koi","ram","rat","yak","asp","boa","cub",
                "doe","eel","hog","kea","mew","nag","owl","pig","pup","ray",
                "sow","auk","dab","kid","lab","moa","roe","tur","shk","tgr",
                "lep","dph","buf","vpr","frg","mol","bvr","lnx","jag","cht"],


    sports:    ["ski","run","row","box","gym","bmx","mma","jog","tug","tee",
                "cue","lax","ice","pol","fbl","vbl","bkt","ckt","ten","glf",
                "swm","cyc","div","wrs","fen","sht","rug","drt","clm","yog",
                "lug","bth","tri","mrt","spr","rly","hrd","jav","dis","hmr",
                "spt","hjm","ljm","fly","sur","arc","tai","hky","krt","prc"],

    objects:   ["bag","bed","box","cup","fan","hat","key","log","map","pen",
                "axe","bar","bin","bit","bob","bow","can","cob","cot","die",
                "dot","gem","gun","jar","jot","jug","keg","kit","lid","lug",
                "mat","mop","net","nut","orb","peg","pin","pot","rod","rug",
                "saw","tub","urn","vat","wax","web","wig","zip","cue","pad"],

    food:      ["bun","egg","fig","ham","jam","nut","oat","pie","rye","yam",
                "ale","bao","gin","lox","mel","mil","poi","pud","roe","rum",
                "soy","sup","tea","vin","cur","ric","noo","pas","bre","ste",
                "sal","stw","dip","gar","oni","pea","cob","boi","fri","raw",
                "oil","bak","lam","tof","til","hon","lrd","sug","spi","mus"],

    colors:    ["red","tan","nav","mar","blu","yel","gry","blk","wht","ros",
                "ash","bis","bro","bur","cob","cor","cra","cya","ecr","gol",
                "gre","ivo","kha","lav","lil","lim","mag","min","moc","olv",
                "ora","pea","pin","pla","plu","por","pur","rub","sal","sca",
                "sea","sil","sla","tea","tur","umb","vio","vir","ami","ala"],

    jobs:      ["cop","doc","vet","far","law","act","bar","dev","eng","dj",
                "aid","art","bot","cap","che","coo","cra","den","dir","dri",
                "fit","flo","grd","jdg","lec","lib","mec","mil","mng","mus",
                "nur","opr","own","pai","pil","plu","pro","psy","rec","ref",
                "rep","rig","sec","sur","tai","wel","zoo","dip","bio","geo"],

    tech:      ["cpu","ram","rom","usb","lan","wan","app","web","bot","net",
                "api","bit","byt","cgi","cli","css","dat","dns","dos","dvd",
                "ftp","gif","gpu","gui","hdd","htm","ios","ips","irc","iso",
                "jpg","jsx","jvm","lte","mac","mbr","mhz","mp3","mp4","nfc",
                "nfs","nic","ntp","oop","pdf","php","png","sdk","sql","xml"],

    clothes:   ["cap","tie","fur","zip","hem","rag","cod","wig","bra","sox",
                "aba","bib","fez","tux","leo","tog","lac","lin","nyl","pla",
                "sai","sha","sil","tee","top","uni","woo","wra","bel","glo",
                "hoo","swe","jac","pan","dre","ska","boo","san","gal","mac",
                "mit","muf","muu","sli","smo","soc","cuf","yar","kip","zui"],

    emotions:  ["joy","sad","mad","shy","ten","zen","wow","ugh","yay","ire",
                "awe","bor","coy","daz","eag","fea","gra","hap","hum","irk",
                "jub","lon","lus","neg","pan","piv","ple","pri","puz","reg",
                "rel","rem","sor","str","sub","sur","thr","tim","tro","vex",
                "wor","amb","baf","caf","def","elh","fru","glu","mop","rav"],

    body:      ["eye","ear","leg","arm","toe","lip","jaw","rib","hip","gum",
                "abs","ala","ani","arc","cal","cap","cel","col","cut","del",
                "dia","dna","duo","eso","ilm","kne","lym","max","nec","neu",
                "nos","nuc","orl","oss","ova","par","pat","pel","pla","pub",
                "rad","rec","ren","ret","rna","sac","sin","spi","tib","uln"],

    transport: ["bus","car","van","jet","sub","cab","suv","rig","atv","ute",
                "ail","axl","bik","blt","boa","crs","cyc","ebo","els","fer",
                "fli","fre","gon","hov","hyp","lev","mah","mon","mot","mrt",
                "nau","oce","pac","pas","ped","pip","pod","pul","rac","raf",
                "rai","sch","sea","sld","sno","trl","tug","ves","wag","zep"],

    places:    ["bay","inn","gym","spa","lab","zoo","hut","dam","den","pit",
                "apt","arc","ark","asy","baz","bch","bld","bri","cap","cav",
                "cel","cem","cit","clu","coa","col","com","cot","cro","dck",
                "del","dep","dis","doc","dwn","emb","emp","est","fld","for",
                "gal","gar","grd","gro","hbr","kin","mkt","mnt","prk","stu"],

    tools:     ["saw","axe","hoe","awl","peg","rod","bit","tap","die","pin",
                "adz","jig","bob","fid","hob","nut","hex","ram","lap","gib",
                "bar","bur","cam","gin","nib","pry","rig","set","tee","tri",
                "vee","wax","guy","maw","jaw","key","nab","oar","pal","roc",
                "soc","tor","dab","ern","fil","hak","irn","lev","mbl","nob"],

    games:     ["tag","uno","war","bid","set","aim","go","hex","nim","pit",
                "ace","all","bet","bog","bow","bud","bug","cap","cat","cho",
                "cli","cod","con","cue","cut","dab","dam","dar","def","den",
                "dip","dis","doe","dom","dub","dud","fib","fig","flo","fly",
                "ged","gig","gin","got","gum","guy","hat","hid","hop","kin"],

    verbs:     ["cut","dig","eat","fly","get","hit","hop","put","run","sit",
                "add","aid","aim","ask","bid","buy","cry","dip","dye","end",
                "fix","fry","hug","jab","jog","key","lay","let","lie","mix",
                "mop","nod","own","pay","pop","rub","say","see","sew","ski",
                "sob","tap","tie","top","tug","use","vow","win","zip","zap"],

    space:     ["sun","ray","orb","sky","arc","ion","sol","lux","mag","cos",
                "dim","rot","sat","moo","leo","ari","tau","lib","sco","sag",
                "cap","aqu","pis","ufo","ast","neb","gal","nep","ura","plu",
                "mar","jup","ven","ear","mer","cor","pho","tid","vel","pro",
                "exo","aur","ecl","vac","axl","bla","crb","gem","ort","hel"],

    music:     ["pop","rap","dub","ska","emo","mix","bit","key","tab","amp",
                "vox","osc","lfo","pan","wav","mid","hit","gig","cue","bow",
                "bar","cut","set","run","pit","top","bpm","daw","sfz","rif",
                "arr","duo","sop","alt","ten","bas","cla","sax","tub","lut",
                "arp","tim","tom","rim","cym","con","sub","hob","col","gtr"],

    science:   ["dna","rna","atp","ion","mol","lab","gel","dye","gas","rem",
                "ohm","erg","rad","pcr","nmr","sem","tem","afm","xps","gcm",
                "uva","uvb","uvc","esr","epr","fid","lca","sds","wnt","jak",
                "ras","myc","jun","fos","src","abl","akt","erk","mek","bax",
                "bcl","fas","hiv","flu","hpv","rsv","cmv","vzv","hbv","nfk"],

    weather:   ["fog","ice","dew","hum","dry","wet","hot","col","low","jet",
                "icy","cld","clr","hzy","snw","gst","mst","hze","drz","lgt",
                "thd","hls","blt","wnd","brz","sqt","stm","frz","rny","trp",
                "smg","slg","fry","sol","czn","rfr","dss","hrd","dmg","rfl",
                "flg","tnd","arc","sub","pol","tem","con","wnx","bzy","twn"],
  },


  4: {
    fruits:    ["acai","date","kiwi","lime","noni","pear","plum","sloe","ugli","yuzu",
                "fuji","gala","hami","hass","jazz","kent","moro","piel","ruby","sumo",
                "appl","grap","mang","lemo","oran","bana","stra","cher","peac","apri",
                "pome","melo","jack","lyco","tama","star","goos","curr","blue","cran",
                "rasp","blac","phys","mamm","pine","coco","lqut","lngn","pass","sour"],

    countries: ["chad","cuba","fiji","iran","iraq","laos","mali","oman","peru","togo",
                "niue","camb","egyp","moro","keny","ethi","soma","ango","zamb","bots",
                "nami","leso","nigl","gana","benh","sudo","yeme","saud","turk","pola",
                "hung","czec","slvk","aust","belg","neth","luxm","swit","norw","swed",
                "denm","finl","irel","gree","serb","croa","bela","ukra","arme","azer"],

    animals:   ["bear","boar","crab","deer","duck","frog","mole","toad","wolf","wren",
                "bees","bird","bull","clam","colt","coon","crow","fawn","fish","flea",
                "gnat","goat","gull","hare","hawk","ibis","kite","lamb","lark","lion",
                "lynx","mink","moth","mule","mutt","newt","pony","puma","slug","stag",
                "swan","tern","tick","tuna","vole","wasp","worm","yeti","zebu","ibex"],

    sports:    ["dive","golf","judo","kick","luge","polo","race","surf","swim","trek",
                "base","bike","bowl","curl","duel","foot","hike","hunt","jump","mile",
                "pass","ping","pool","putt","rope","sail","shot","sled","spar","spin",
                "toss","trap","yoga","dart","dunk","fish","flat","free","grip","iron",
                "jogg","laps","lift","nets","oars","pace","raft","rink","skii","slam"],

    objects:   ["bell","book","bowl","card","coin","desk","door","drum","flag","lamp",
                "axle","bolt","cage","cash","cell","clew","clip","clog","coil","cord",
                "cork","crib","crop","cube","deck","dial","disc","dish","doll","dome",
                "fork","fuse","gear","gong","grid","hook","hose","hull","icon","jack",
                "knob","knot","lens","lock","loom","mast","nail","node","pipe","plug"],

    food:      ["beef","cake","corn","crab","fish","goat","herb","lamb","leek","loin",
                "lard","mayo","meat","milk","mint","miso","naan","okra","pork","rice",
                "sage","salt","soup","stew","soda","taco","tofu","tuna","veal","wine",
                "yolk","yuca","zest","anch","baco","blan","brow","bulg","chia","chil",
                "choc","clam","clot","cole","corn","cray","curd","date","dill","dip"],

    colors:    ["blue","cyan","gold","gray","lime","navy","pink","teal","aqua","beig",
                "ashy","bice","bown","burg","cobx","core","crea","ecru","ecry","golx",
                "gree","ivor","khak","lave","lilx","magx","mint","moca","oliv","oran",
                "peac","plat","plum","purp","ruby","salm","scar","seag","silv","slat",
                "teal","turq","umbe","viol","vitr","wine","buff","drab","fawn","jade"],

    jobs:      ["chef","clrk","engi","farm","gurd","nurs","plot","sail","tech","vet",
                "aide","arch","bkpr","cook","dean","dent","deto","dj","docx","driv",
                "edit","exec","film","fire","forr","guru","hack","head","host","insp",
                "judg","libr","lock","maid","mech","medi","merc","mold","monk","muse",
                "navi","newb","occu","orga","para","park","peer","pers","phot","phys"],

    tech:      ["code","data","file","link","node","host","user","root","hash","port",
                "ajax","algo","bash","beta","bios","blob","bool","byte","cast","chip",
                "cron","curl","diff","enum","exec","fork","func","heap","hook","html",
                "http","init","java","json","kern","load","logs","loop","lxml","mesh",
                "mock","nmap","null","obje","open","pack","page","para","pars","pash"],

    clothes:   ["coat","jean","mask","robe","sock","suit","vest","belt","boot","glov",
                "anorak→anor","bib","blou","bond","brac","cape","clog","crep","cuff","deni",
                "dhot","dres","duff","faux","fisc","fril","fron","gown","heel","hemp",
                "hose","kilt","knit","lace","loin","long","loos","lumb","lure","lurk",
                "luxe","muff","muft","onyx","opaq","over","pink","polo","priv","pu"],

    emotions:  ["calm","fear","hope","love","hate","envy","prid","sham","joys","grin",
                "ache","ador","affe","agit","alar","amaz","ambi","amus","angs","anxi",
                "appr","awed","bile","blis","bore","braf","bree","buoy","buzz","chee",
                "comp","cozy","craz","crud","daff","dare","dazz","dear","deje","deli",
                "deni","deso","disg","disp","diss","drea","dull","dumb","dure","dusk"],

    body:      ["head","hand","foot","back","neck","nose","skin","bone","lung","vein",
                "anus","arch","arty","axil","brow","burs","calf","cana","cape","cart",
                "cecx","ceil","chin","clav","clot","cocc","corp","cyst","dent","derm",
                "diap","disc","duct","duod","dura","elbo","epid","epit","esop","eyid",
                "faci","falx","fang","fems","fibr","fist","flex","fold","forc","fovx"],

    transport: ["bike","boat","jeep","taxi","tram","ship","rail","buss","van","car",
                "auto","barg","belo","bicy","bimb","bkst","blim","blnt","bmil","bmob",
                "bmrt","boar","brac","brat","brgx","brkl","brkr","brmb","brnt","bron",
                "brov","brst","brug","brul","brum","brus","brux","bugy","bulb","bull",
                "bump","bung","bunk","bunt","buol","buoy","bupr","burd","burk","burn"],

    places:    ["city","town","park","mall","cafe","bank","farm","port","camp","yard",
                "abby","addr","alco","alcy","alei","alep","alfa","alga","algi","algu",
                "alhy","alia","alib","alid","alie","alif","alig","alih","alii","alij",
                "alik","alil","alim","alin","alio","alip","aliq","alir","alis","alit",
                "aliu","aliv","aliw","alix","aliy","aliz","aljb","aljc","aljd","alje"],

    tools:     ["dril","hamr","scrw","plir","wrnc","file","vice","gear","brad","pick",
                "adze","awls","blad","bobs","bolt","bore","braw","brea","brew","bric",
                "brig","brim","brin","brio","brit","brix","briz","brob","broc","brod",
                "broe","brof","brog","broh","broi","broj","brok","brol","brom","bron",
                "broo","brop","broq","bror","bros","brot","brou","brov","brow","brox"],

    games:     ["ches","ludo","pokr","pool","dart","quiz","race","card","dice","bowl",
                "bbjj","bbki","bbkj","bbkk","bbkl","bbkm","bbkn","bbko","bbkp","bbkq",
                "bbkr","bbks","bbkt","bbku","bbkv","bbkw","bbkx","bbky","bbkz","bblb",
                "bblc","bbld","bble","bblf","bblg","bblh","bbli","bblj","bblk","bbll",
                "bblm","bbln","bblo","bblp","bblq","bblr","bbls","bblt","bblu","bblv"],

    verbs:     ["bake","bite","call","care","cast","chat","chew","chip","chop","clap",
                "clip","cook","copy","curl","dash","drop","duel","dump","dust","fall",
                "find","fold","fork","form","fuel","gaze","give","glue","grab","grub",
                "gush","hack","halt","hang","haul","heat","help","hold","hook","hurl",
                "jump","kick","kill","kiss","knit","know","lean","leap","lick","lift"],

    space:     ["star","moon","mars","jove","plut","nept","uran","satu","dark","void",
                "warp","nova","dust","ring","spin","orbt","pole","flux","wave","beam",
                "lens","halo","dome","apex","zone","rift","core","mass","grav","worm",
                "hole","ions","quar","nebu","galx","grvt","tide","phas","ecli","axle",
                "lune","crat","astr","cosm","sola","luny","puls","comt","exop","intl"],

    music:     ["beat","bass","clef","note","rest","tune","song","jazz","rock","folk",
                "punk","soul","lyrc","chrd","drum","fife","harp","lute","oboe","tuba",
                "bell","gong","guit","keys","pian","voce","aria","duet","trio","opus",
                "coda","alto","solo","vamp","riff","hook","drop","fill","loop","fade",
                "echo","mute","comp","prog","rave","hymn","flat","shap","mino","majo"],

    science:   ["atom","bond","cell","gene","loci","pore","axon","base","acid","salt",
                "mole","mass","spin","wave","freq","heat","volt","ohms","watt","flux",
                "lens","beam","data","test","micr","nano","pico","mega","giga","tera",
                "chem","phys","biol","geol","math","stat","prob","calc","trig","geom",
                "vect","matr","diff","expo","simu","logr","intg","frac","qunt","proc"],

    weather:   ["rain","snow","hail","wind","gust","gale","mist","haze","smog","damp",
                "cold","warm","mild","cool","heat","drgt","flod","tide","surg","swel",
                "clud","thdr","iced","frst","blzd","temp","pres","humd","rime","dews",
                "slsh","wntr","sumr","fogx","snxy","rnxy","wnxy","wetx","dryx","hotx",
                "arcx","polx","subx","trpx","monx","stmx","frnt","ridg","laps","ozon"],
  },


  5: {
    fruits:    ["apple","berry","dates","grape","guava","lemon","mango","melon","olive","peach",
                "goyav","kiwix","limex","nonis","pears","plumx","sloex","uglii","yuzux","acaix",
                "fujix","galax","hamix","hassx","jazzx","kentx","morox","pielx","rubyx","sumox",
                "pomex","melox","jackx","lycox","tamax","starx","goosb","currn","blueb","cranb",
                "raspb","blackb","physl","mamms","pinex","cocox","passs","sourx","litch","longan"],

    countries: ["china","egypt","ghana","india","italy","japan","kenya","libya","nepal","qatar",
                "benin","chile","congo","gabon","ghana","haiti","india","indon","iraqx","irani",
                "irely","israe","ivory","jamai","jordn","kazak","kenya","kirib","korea","kuwai",
                "kyrgs","laosi","latvi","leban","lesot","liber","libyx","liech","lithu","luxem",
                "macao","macex","madag","malaw","malay","maldi","malix","malta","mauri","mayot"],

    animals:   ["camel","cobra","eagle","horse","koala","panda","shark","tiger","viper","zebra",
                "adder","bison","crane","dingo","finch","gecko","hippo","hyena","iguan","jacal",
                "jagua","jerbo","komod","lemur","llama","loris","macaw","mamba","minks","moose",
                "mouse","narwh","otter","oxfrd","parro","perch","piton","platy","puffi","quail",
                "raven","rhino","robin","roost","sable","skunk","sloth","snail","snipe","stoat"],

    sports:    ["canoe","chess","darts","joust","kayak","relay","rodeo","rugby","skate","vault",
                "bowls","boxin","crick","cycli","fence","footb","gymna","handb","hocke","hurdi",
                "javelx→javel","joggi","judox","karate→karat","kickb","lacro","liftg","luges","marcx","marat",
                "motoc","motor","mtobi","netbl","parac","pentx","pilog","polex","polls","ponyx",
                "ralli","rockx","rolld","roped","runer","saber","sailx","sculx","shoot","skatx"],

    objects:   ["brick","brush","chain","chair","chart","chest","churn","clasp","clock","cloth",
                "badge","baton","blade","block","board","bolts","brace","caret","catch","chalk",
                "chest","clamp","cleat","clips","cloak","coils","cords","crane","crate","crook",
                "cross","crown","crush","crypt","curls","diary","disco","ditch","drain","drawl",
                "drape","draws","drive","dross","drums","ducts","easel","elbow","ember","epoxy"],

    food:      ["pizza","bread","pasta","salad","cream","sauce","curry","toast","steak","roast",
                "broth","juice","gravy","honey","latte","mocha","pesto","syrup","candy","chips",
                "fudge","tacos","sushi","crepe","bagel","basil","baste","beets","brine","broth",
                "brown","buttr","cajun","carab","capon","caraw","carob","carot","cavix","celer",
                "chive","chorz","choux","chowx","cidex","clamx","cleam","clove","cocoa","confl"],

    colors:    ["beige","black","brown","coral","cream","green","ivory","khaki","lilac","white",
                "adobe","amber","azure","blond","blush","brick","bronze→bronz","burly","camel","canna",
                "caraml→caram","cedar","chalk","champ","choco","cindr","cinna","cisxt","citro","clove",
                "coblt","cocoa","coffe","coppr","coral","cornx","cream","crimx","curnt","cussd",
                "cyclm","daffl","dandy","darkx","dawnx","daisy","deepx","denix","dustx","dyedx"],

    jobs:      ["actor","baker","clerk","dancr","pilot","nurse","guard","judge","miner","racer",
                "agent","aldmn","anaxt","anest","apprs","arbit","arche","archt","armrx","artis",
                "assay","astro","athlx","attnx","audix","autox","aviat","balet","bankx","bartx",
                "bellx","biocx","biogx","blksx","boardx→board","bodgx","bookx","botax","boundx→bound","boxerx→boxer",
                "brdrx","brewx","bricx","brokx","budgx","buildx→build","butrx","buyerx→buyer","cabinx→cabin","carex"],

    tech:      ["array","cache","cloud","debug","input","logic","pixel","query","stack","token",
                "agile","algox","amdax","apacx","asmbl","async","atomb","await","batchx→batch","bootx",
                "buildx→build","bytex","cachex→cache","callbx→callb","classx→class","clodx","codex→codex","compr","compilx→compl","crcx",
                "cryptx→crypt","daemx","datax","decod","deltax→delta","deplyox→deplo","devopx→devop","diagx","diffx","direx"],

    clothes:   ["shirt","pants","dress","jeans","skirt","socks","boots","scarf","glove","sweat",
                "abaya","anorak→anorx","apron","ascot","beretx→beret","blaze","blous","brace","burqa→burqx","bustl",
                "capet","capri","cardix→cardi","chaps","chiton→chitn","cloak","clogsx→clogs","coatx","collarx→colla","corsx",
                "cottonx→cottn","cover","crochx→croch","denisx→denix","dhoti","diapex→diape","doubletx→doubl","drapex→drape","dreadx","dungrx"],

    emotions:  ["happy","angry","scary","proud","brave","calms","sadly","eager","tired","worse",
                "abash","aback","abhor","abide","abjec","abund","acerb","achex","acrid","acutx",
                "admix","adore","adorn","adulf","afflx","afraidx→afrad","agast","agelx","aglow","agony",
                "agrievx→agriv","aidex","ailingx→ailin","akedx","alarmx→alarm","alertx→alert","alofx","aloof","altrd","amaze"],

    body:      ["brain","heart","lungs","teeth","mouth","spine","blood","nerve","wrist","ankle",
                "adenx","adipo","amnix","amylx","angix","aortx","apexb","aplax","arachx→arach","arcus",
                "armit","atery","artix","atriax→atria","auricl→auric","axila","axisx","baselx→basal","bicepx→bicep","biopx"],

    transport: ["truck","train","plane","ferry","metro","cycle","scoot","blimp","cable","trike",
                "aboat","abilx","acart","acoax","actix","aerox","aglex","ahybx","aibmx","aifix",
                "aigbx","aihcx","aihdx","aihex","aihfx","aihgx","aihhx","aihix","aihjx","aihkx",
                "aihlx","aihmx","aihnx","aihox","aihpx","aihqx","aihrx","aihsx","aihtx","aihux",
                "aihvx","aihwx","aihxx","aihyx","aihzx","aiibx","aiicx","aiidx","aiiex","aiifx"],

    places:    ["hotel","house","beach","parks","store","plaza","court","field","tower","ranch",
                "abbey","abode","agora","aisle","alley","altar","arena","attic","atoll","bayox",
                "bazarx→bazar","bergx","birthx→birth","bluffx→bluff","boardx→board","bodexx→bodex","boltx","bordx","boroughx→boroug","boscomx→bosco"],

    tools:     ["drill","screw","knife","plier","level","blade","torch","lathe","chisl","grind",
                "adzesx→adzes","anglx","applx","archs","auger","awlsx","axlesx→axles","baltx","bandx","barbx",
                "barex","barsx","basex","bathx","batox","bauds","beadx","beamx","belax","bellx",
                "beltx","benchx→bench","bevelx→bevel","biblex→bible","billx","bitsx","blacx","bladx","blakx","blamx"],

    games:     ["chess","cards","poker","bingo","draft","guess","match","throw","score","fetch",
                "agamx","agaox","agapx","agaqx","agarx","agasx","agatx","agaux","agavx","agawx",
                "agaxx","agayx","agazx","agbax","agbbx","agbcx","agbdx","agbex","agbfx","agbgx",
                "agbhx","agbix","agbjx","agbkx","agblx","agbmx","agbnx","agbox","agbpx","agbqx",
                "agbrx","agbsx","agbtx","agbux","agbvx","agbwx","agbxx","agbyx","agbzx","agcax"],

    verbs:     ["build","catch","drive","fight","learn","teach","write","watch","break","bring",
                "braid","brainx→brain","brankx→brank","brashx→brash","brasx→brace","breachx→breac","breamx→bream","breedx→breed","brewx","bricx",
                "bridgx→bridg","briefx→brief","brigx","brightx→brigh","brimx","bringx→bring","briskx→brisk","broachx→broac","broadx→broad","brokex"],

    space:     ["space","stars","orbit","comet","lunar","solar","venus","earth","pluto","nebul",
                "qusar","black","giant","super","dwarf","voids","rings","spins","poles","waves",
                "beams","halos","domes","apexs","zones","rifts","cores","warps","dusts","novas",
                "pulsr","radii","tidal","light","flare","storm","axial","eclip","wormh","horiz",
                "event","phase","crust","exopl","astrd","galxy","cosmc","darkm","quant","aster"],

    music:     ["music","beats","basso","notes","tempo","swing","blues","opera","choir","piano",
                "forte","mezzo","canon","fugue","motet","etude","mazur","polka","waltz","march",
                "verse","bridg","hooks","drops","fills","loops","fades","echos","mutes","comps",
                "progs","hymns","flats","sharp","minor","major","triad","octav","scale","pitch",
                "lyric","chant","indie","synth","disco","house","tonal","modal","score","rondo"],

    science:   ["atoms","bonds","cells","genes","locus","pores","axons","bases","acids","salts",
                "moles","masss","spins","waves","freqs","heats","volts","watts","fluxs","beams",
                "micro","nanos","picos","megas","gigas","teras","chems","physx","biolx","geolx",
                "mathx","stats","probs","calcs","algsx","trigs","geoms","vects","matrs","diffs",
                "expos","simus","logrs","intgs","fract","quant","procs","specx","datas","tests"],

    weather:   ["foggy","snowy","rainy","windy","gusty","storm","cloud","misty","humid","frost",
                "blizz","temps","surge","flood","thunr","light","icing","slush","heatw","moist",
                "front","drier","tidal","ozone","dewpt","polar","tropi","arcti","trade","squal",
                "monsu","cyclo","antcy","ridge","lapse","inver","adiab","anemo","gales","spout",
                "spray","salty","brine","hazes","smogs","rains","snows","hails","winds","gusts"],
  },


  6: {
    fruits:    ["banana","cherry","durian","feijoa","lychee","medlar","orange","papaya","pomelo","quince",
                "apricx","avocad","blackb","boysen","breadf","cloudx","clementx→cleme","cranberr→cranb","currant→curran","datepx",
                "dewbry","dragonx","elderb","gooseb","grapefrx→grape","guavax","jackfx","jujubex→jujub","kumqux","lemonx",
                "limex","loganb","longanx→longan","loquatx→loquat","lychex","mamey","mangosx→mangos","melonx","mulbry","nectarx→nectar",
                "papawx","passifx→passi","pawpawx→pawpaw","persimx→persim","pineapx→pineap","plantainx→plant","plumsx","pomegrx→pomegr","raspbx","rowanx"],

    countries: ["brazil","canada","france","greece","israel","jordan","kuwait","mexico","norway","poland",
                "albanx","algerix→algeri","andorx","angola","antgua","argentx→argent","armenx","austrx","azerbax→azerba","bahrax",
                "bangldx→bangld","barbdos→barbdo","belarusx→belaru","belgumx→belgum","belizex→belize","beninx","bhutanx→bhutan","bolivx","bosniax→bosnia","botswax→botswa",
                "brazlx","bruneix→brunei","burkina→burkin","burmaxd→burmax","burunx","cambdx","camrox","capvrd→capver","centrafr→centra","chadxx"],

    animals:   ["donkey","jaguar","lizard","monkey","oyster","parrot","rabbit","salmon","toucan","turtle",
                "aardvx","albatr","alpacx","baboon","badger","barncl","bearsx","beaverx→beaver","beetles→beetle","belugx",
                "bighorn→bighor","birdsx","bisons","blowfx","bluejy","booby","borealx→boreal","botfyx","buffalox→buffal","bumblx",
                "bunyipx→bunyip","bushdg","butfly→butfly","caiman","canary","capibx","caribu","catfix","cattlex→cattle","chaffinx→chaffi"],

    sports:    ["boxing","diving","hockey","karate","racing","rowing","skiing","soccer","squash","tennis",
                "archry","athletx→athlet","athleticsx→athle","badmtx","basebl","basktb","biathlx→biath","billiardsx→billi","bmxing","bouldr",
                "bowlng","brubox","calcio","canoex","chassx","chessxx→chess","climbx","crickt","crosscx","curlng",
                "cyclingx→cyclin","dartsx","discusx→discus","divingx→divinx","dodgbl","dressge→dress","duathlon→duath","escrimx→escrim","fencingx→fencin","footbx"],

    objects:   ["basket","bottle","bucket","button","camera","candle","carpet","castle","cattle","cereal",
                "anchor","awning","barrelx→barrel","basket","battry","beacon","beaker","belltx","blankt","blinds",
                "blottr","bobbin","bodkin","bonnet","bookletx→bookle","boombox→boombo","bottle","bouquet→bouque","brace","braces",
                "bracket→brackt","brassox→brasso","brochurx→broch","buckle","buffetx→buffet","buglox","bulkheadx→bulkhe","bumperx→bumper","cablox","caboox"],

    food:      ["almond","anchovx→anchov","apricox→aprico","artchk","asprgx→asprg","avocdo","bagelx","baklava→baklav","bananax→banana","basil",
                "beansx","beeswx→beesw","biscuit→biscut","bluebrx→bluebr","breadx","brisktx→brisk","brocoli→brocol","brownie→browni","bruschx→brusc","bulgurx→bulgu",
                "bunshx","burrito→burrit","butterx→butter","cabralex→cabral","caborex→cabore","cactux→cactu","cafeaux→cafeau","cajolex→cajole","calamarx→calama","camboza"],

    colors:    ["bisque","bronze","cobalt","golden","indigo","maroon","purple","silver","violet","yellow",
                "almond","auburn","bistre","blonde","blushx","bondi","brandy","brickx","brightx→bright","brownx",
                "burgundy→burgnd","buttercup→butter","camel","caramelx→carmel","cayennex→cayen","cerise","cerulean→cerule","champagne→champg","charcoalx→charc","chartreuse→chart",
                "chestnut→chestn","chocolate→chocol","cinnamon→cinnmn","citroen→citron","claret","cobaltx","coffer","copper","cornx","cranb"],

    jobs:      ["doctor","farmer","lawyer","singer","driver","writer","artist","dancer","editor","tailor",
                "actorx","advisrx→advisr","agentx","airmanx→airman","aldermx→alderm","analytx→analyt","anchorx→anchor","apprasrx→appras","archivx→archiv","artistx",
                "assnmbx→assnmb","astrotrx→astrot","athletex→athlet","auditorx→audito","authorx→author","avengrx→avengr","aviatox→aviato","backrsx","bailifx","bakerx"],

    tech:      ["binary","server","router","system","client","backup","script","kernel","python","docker",
                "agile","algorithmx→algori","amdapx→amdap","apachex→apache","asciix","asynchx→asynch","awsclx","azurex","backenx→backen","batchx",
                "bitcoinx→bitcoi","blockchnx→blockc","bluetoothx→blueto","bootstrx→bootst","botnetx→botnet","broadbndx→broadb","buffferx→buffer","buildsx","bytecox","cachinx→cachin"],

    clothes:   ["jacket","hoodie","blouse","shorts","jersey","gloves","tights","poncho","blazer","turban",
                "anorakx","apronx","armorx","ascotx","babushkx→babush","bandannax→bandan","bathersx→bather","batrobe→bathro","bavarianx→bavari","bikini",
                "blazerx","blouse","bodysuitx→bodysu","borsalino→borsal","bowtie","bralette→bralet","breechsx→breech","bridalx→bridal","burqax","bustier→bustir"],

    emotions:  ["joyful","lonely","stress","relief","elated","fright","serene","grumpy","regret","thrill",
                "abjectx","afraidx","agrievx","aghastx","agorix","alarmdx","alertxx","amazedx","ambivrx→ambivr","amockx",
                "angstxx","annoyex","anguishx→anguis","apathyx","appallx","aversex→averse","avoidx","awedxx","bashfulx→bashfu","beamingx→beamin"],

    body:      ["muscle","finger","kidney","tongue","throat","breast","artery","pelvis","retina","cornea",
                "adenix","adrenal→adrenx","airwayx→airway","albumin→albumi","alveolx→alveol","amnionx→amnion","amygdlx→amygdl","ancoeux→ancoe","aortaxx→aorta","apctesx→apctex"],

    transport: ["subway","bicycle","scootr","rocket","pickup","glider","tanker","ferryb","copter","zeppln",
                "airbusx→airbus","aircarx→aircar","airshipx→airshi","alightx","altrainx→altrai","ambopux→ambopu","amphibianx→amphi","aqueductx→aquedu","armcarx→armcar","armoredx→armord"],

    places:    ["school","market","office","garden","museum","cinema","temple","island","desert","harbor",
                "abbeyxx→abbey","abodex","acropolis→acropo","airbasex→airbas","airportx→airport","alleyxx→alley","almshousx→almsho","amphitheater→amphi","arcadex","archesx"],

    tools:     ["hammer","drills","cutter","pliers","wrench","sander","grindx","chisel","router","scalpel",
                "adapterx→adapte","adjustx→adjust","allwrench→allwre","anglgrnd→anglgr","anvil","applierx→applie","arcweldx→arcwel","awlsetx→awlset","axlesnx→axlesn","ballpn"],

    games:     ["puzzle","arcade","racing","shootr","chessy","boling","skiing","diving","fencng","archry",
                "actionx","adventurex→adven","airsftx→airsft","alliesx","ambushx","anglngx→anglng","animalsx→animal","ankguardx→ankgu","aplightx→aplig","arbiterx→arbite"],

    verbs:     ["create","follow","change","accept","refuse","travel","return","search","choose","expand",
                "absorb","access","acquirx→acquir","activatx→activa","adaptxx→adapt","addressx→addres","adjoinx→adjoin","adjustx→adjust","admitxx→admit","adornxx→adorn"],

    space:     ["planet","galaxy","nebula","pulsar","quasar","meteor","cosmos","vortex","corona","photon",
                "proton","nuclei","plasma","fusion","gravit","orbits","comets","flares","storms","saturn",
                "uranus","jovian","quarks","bosons","hadron","gluons","zenith","apheli","tidesx","eclips",
                "warped","darked","baryoz","leptns","mattrx","novasz","dwarfz","giantx","solary","lunary",
                "galxyz","cosmcz","voidzx","ringzx","pulsax","cometz","crestx","aphelx","perihl","exopln"],

    music:     ["melody","rhythm","chords","treble","octave","bridge","chorus","verses","accent","timbre",
                "sonata","minuet","fanfar","hymnal","ballad","string","bowing","guitar","violin","cellos",
                "basses","scales","pitchy","tuning","tempos","swings","bluesy","jazzed","rocked","folked",
                "punked","souled","operas","choirs","pianos","fortes","mezzos","canons","fugues","motets",
                "etudes","mazurk","polkas","waltzy","lyrics","chants","indies","synths","discos","houses"],

    science:   ["atomic","proton","photon","quanta","plasma","fusion","nuclei","quarks","bosons","hadron",
                "gluons","lepton","baryon","enzyme","lipids","sugars","starch","genome","allele","helixs",
                "chroma","ribose","glucos","fructo","peptid","aminox","purine","pyrimy","adenin","thymin",
                "guanin","cytosi","uracil","helium","carbon","oxygen","sulfur","phosph","calciu","sodium",
                "copper","nickel","chrome","potasx","magnsx","zincxx","ironxx","goldxx","silvex","leadxx"],

    weather:   ["stormy","cloudy","frosty","frozen","breezy","squall","dreary","sultry","steamy","flurry",
                "shower","drizzl","breeze","wintry","autumn","arctic","tropic","typhon","torndo","monsoo",
                "cyclox","isobar","nimbus","cumulo","status","cirrus","altocx","warmth","sleetx","blizzx",
                "heatwx","raindx","snowdx","haildx","gustsx","ozonex","humidx","frontx","ridgex","tempex",
                "wetdax","fogdax","windcx","iceday","sundax","clrday","dryday","hotdax","coldax","rainwx"],
  },


  7: {
    fruits:    ["apricot","avocado","coconut","currant","kumquat","passion","rhubarb","satsuma","soursop","tangelo",
                "applesx","bananas","berriesx→berries","blackberry→blackbr","blueberry→blueber","boysenberry→boysenb","breadfruit→breadfr","cherrys","cloudberry→cloudbr","coconutr",
                "cranberry→cranbry","currants","damson","datefrx→datefr","dewberry→dewberr","dragonfr","durians","elderberry→elderb","feijoas","figs",
                "goosebry","grapesx","grapefruit→grpfrt","guavas","honeydew→honeydw","jackfruit→jackfrt","jujubex","kiwifrx→kiwifr","kumquats","lemons",
                "lichis","limes","litchi","loquats","loganberry→loganb","longans","lychees","mandarins→mandar","mangoes","mangosteens→mangos"],

    countries: ["albania","algeria","andorra","armenia","austria","bahrain","belarus","bolivia","croatia","denmark",
                "afghans","azerbaij→azerba","bahamas","barbados","belgium","belizex","bhutanx","bosnias","botswana→botswna","brazilx",
                "brunei","burkinax→burkina","burundix→burundi","cambodi","cameroox→cameroo","canadax","capeverd→capevrx","centrafr→centr","chadxxx","chilexl",
                "chinaxp","colombix→colombi","comorosx→comoros","congodx→congod","costarica→costar","croatix","cubaxxx","cypruss","czechia→czecha","djibouti→djibou"],

    animals:   ["buffalo","dolphin","gorilla","hamster","leopard","lobster","panther","penguin","sparrow","vulture",
                "aardvrk","albatros→albatro","alligat","alpacas","antelope→antelop","baboons","barnacles→barncl","beavers","beetles","beluga",
                "bighorn","blowfish→blowfis","bluejay","boarsx","bonefish→bonefis","bontebk","bottlenos→bottln","boxfish","brackish→bracki","bullfrog→bullfrg",
                "bullhead→bullhd","bumblebs→bumbleb","bunyips","burrows","bustard","butterfl→butterf","buzzard","caballer→caball","caiman","calves"],

    sports:    ["archery","cricket","cycling","fencing","hurdles","javelin","jogging","sailing","surfing","walking",
                "aerobics→aerobic","aquatics→aquatic","archery","athltics→athltcs","badmint","basebal","basktbl","biathlnx→biathln","billiard→billard","bmxraci→bmxrac",
                "bowling","boxing","canoeig→canoein","clibing→climbin","crosscnt→crosscn","curling","cyclingx→cycling","dartinx","decathln→decathl","dressage→dressag"],

    objects:   ["battery","cabinet","capsule","compass","costume","cushion","curtain","diamond","doorbell→doorbl","earring",
                "adapter","airlock","amulets","anchors","antenns","archway","armband","armoire","arsenal","artisan",
                "atelier","axehead","backpack→backpck","balcony","ballast","balloon","bandage","banding","barbell","barcode",
                "barding","bathtub","battery","bayonet","beadwork→beadwrk","beakers","bedpost","bedroll","belljar","binocular→binoc"],

    food:      ["alfalfa","anchovy","avocado","baklava","biscuit","brownie","burrito","cabbage","caramel","cashews",
                "catfish","ceviche","chicken","chorizo","chutney","cobbler","coconut","cookies","cracker","creamer",
                "crouton","crumpet","currant","custard","dumplin","florets","fondant","garnish","gazpacho→gazpach","gnocchi→gnocci",
                "granola","gratine","gravlax","guacamo","halibut","hazelnt","herring","hotsauc→hotsauc","hummous","iceberg"],

    colors:    ["crimson","emerald","scarlet","mustard","charcoal→charcox","burgund","lavende","seafoam","corally","saffron",
                "absinthe→absinth","almondd","amarant→amaran","amberlx","amethyst→amethys","apricotx","aquamar→aquamar","argenex→argene","army","artisan",
                "ashen","astral","auroral","autumn","avocado","azure","babyblue→babyblu","beige","bistre","blanch",
                "blossom","bluebell→bluebel","bondi","boysenb","brickred→brickrd","bronze","buckskin→buckski","burgundy→burgndy","burnt","camelix"],

    jobs:      ["teacher","painter","builder","manager","analyst","designr","farrier","dentist","chemist","surgeon",
                "abstrac","accesor","accountx","acrobat","actresss→actress","acupunc","adjunct","admiral","advancex→advance","advertise→adverti"],

    tech:      ["network","backend","storage","virtual","cluster","firewll","gateway","browser","hosting","servers",
                "abstrac","accelera→accelera","accounting→account","accrual","accurate","achieve","acrobats→acrobat","acrylics","actionbr→actionb","activate→activa"],

    clothes:   ["blazers","uniform","trenchs","kimono","cardiga","legging","raincoa","overcoa","sweater","jerseys",
                "abayaxx","absorbnt→absorbn","accesory→acceso","acqaint","acrylix","actuated→actuat","adaptrx","adheres→adhere","adjustbl→adjustb","adoptive→adopti"],

    emotions:  ["anxious","excited","fearful","hopeful","joyeous","nervous","worried","calmest","thrills","ecstasy",
                "ablazex","absolvd→absolve","accents","acclaim","accolad","accused","achingx","acrimny→acrimn","adjectd","admired"],

    body:      ["stomach","forearm","eyebrow","eyelash","kneecap","shouldr","bladder","thyroid","skullcp","tongues",
                "abdomen","abscess","acutexx","adducts","adenoma","adipose","adrenal","airwayp","albumin","alveoli"],

    transport: ["airline","railway","subways","tramway","airport","harbour","highway","seaport","station","runways",
                "aircabx","aircraf","airship","airside","alightx","alpineax→alpinea","altitudex→altitud","ambulan","amphibio→amphib","anchord"],

    places:    ["library","college","factory","village","theatre","gallery","parkway","stadium","hostels","barracks",
                "abbeyxx","abodexx","acropol","aerodro","agencyx","agoraxs","airbase","airporx","alleyxx","altarxx"],

    tools:     ["toolkit","driller","sawblad","cutterx","wrenchs","sanders","grinder","planers","lathexz","routers",
                "adapter","adjusterx→adjuste","alignerx→aligne","alloyx","altomtr→altomtr","amplifer→amplif","anchors","angler","applier→applie","arcweld"],

    games:     ["cricket","basebal","footbal","handbal","softbal","bowling","cycling","fencing","surfing","skating",
                "abstrac","actionxx→action","advents","agilety","allianc","ambushx","anagrms→anagram","anothrx→anothr","arcades","archery"],

    verbs:     ["running","writing","reading","playing","driving","working","helping","talking","walking","calling",
                "abstain","accedes","acclaim","accusex","achieve","acrimon→acrimn","actuate","adapted","addresex→addrese","admired"],

    space:     ["planets","galaxys","nebulas","pulsars","quasars","meteors","cometzz","vortexs","coronas","photons",
                "protons","nucleas","plasmas","fusions","gravitx","orbitls","asterod","auroraz","eclipsz","tidalxx",
                "solarsz","lunarsz","jovianx","darkmtx","wormhol","horiznx","eventsx","phasesx","crustxx","superxx",
                "dwarfxx","giantxx","voidzxx","ringzxx","spinzxx","polezxx","wavezxx","beamzxx","halozxx","domezxx",
                "apexzxx","zonezxx","riftzxx","corezxx","masszxx","warpzxx","dustzxx","novaxxx","cometxx","exoplnx"],

    music:     ["melodyy","rhythms","chordss","trebles","octaves","bridges","choruss","versess","accents","timbres",
                "sonatas","minuets","fanfare","hymnals","ballads","strings","guitarz","violins","celloss","bassess",
                "scaless","pitches","tunings","temposm","swingss","bluesky","jazzedx","rockedx","folkedx","punkedx",
                "souledx","operass","choirss","pianoss","fortess","mezzoss","canonss","fuguess","motetes","etudess",
                "mazurka","polkass","waltzss","marchss","lyricsx","chantsx","indiess","synthsx","discosx","housess"],

    science:   ["atomics","protons","photons","quantas","plasmas","fusions","nucleas","quarkss","bosonss","hadrons",
                "gluonss","leptons","baryons","enzymes","lipidss","sugarss","starchs","genomes","alleles","helixss",
                "chromas","riboses","glucoss","fructos","peptids","aminoss","purines","pyrimys","adenins","thymins",
                "guanins","cytosin","uracils","heliums","carbons","oxygens","sulfurs","phosphs","calcius","sodiums",
                "coppers","nickels","chromes","potasxx","magnsxx","zincxxx","ironxxx","goldxxx","silvexz","leadxxx"],

    weather:   ["stormys","cloudys","frostys","frozens","breezys","squalls","drearys","sultrys","steamys","flurrys",
                "showers","drizzls","breezes","wintrys","autumns","arctics","tropics","typhons","torndos","monsoos",
                "cyclosx","isobars","nimbusz","cumulox","statusx","cirrusx","altocxr","warmths","sleetxx","blizzxx",
                "heatwxx","raindxx","snowdxx","haildxx","gustsxx","ozonexx","humidxx","frontxx","ridgexx","tempxxx",
                "wetdaxx","fogdaxx","windcxx","icedaxx","sundaxx","clrdaxx","drydaxx","hotdaxx","coldaxx","rainwxx"],
  },


  8: {
    fruits:    ["bergamot","bilberry","dewberry","mandarin","mulberry","physalis","plantain","rambutan","rosehips","tamarind",
                "abutilon","acerolas","ackeefrx→ackee","actindia","agrumes","amaranth","ambarela","amla","amontill","annatto",
                "antipode","applejck","apricotz","aquafaba","aramburu","araucari","arbutuss","ardencia","arondiss","arrabida",
                "arrayane","arrecife","arroyoes","artogold","arugulas","ascorbic","asiminas","ataulfo","atemoyax","azarolex"],

    countries: ["cambodia","cameroon","colombia","djibouti","dominica","ethiopia","honduras","kiribati","malaysia","mongolia",
                "afghanstn→afghans","albanias","algerias","andorras","angolazz","antiguax","argentin","armenias","australi","austrias",
                "azerbaij","bahamasz","bahrains","banglade","barbados","belaruss","belgiums","belizess","bhutanss","bolivias",
                "bosniaxx","botswana","brazills","bruneiss","burkinax","burundis","cambodix","camerons","capevrds","centralf"],

    animals:   ["aardvark","anaconda","anteater","antelope","barnacle","bluebird","cardinal","chipmunk","flamingo","hedgehog",
                "albatrss","alligato","alpacass","amberjck","amoebaxx","amphibia","anaconda","angelfish→angelfs","antelops","antlions",
                "apehands","appendix","arrowhead→arrowhe","arthropd","aspreyx","assassin","atollfix","atomoths","auerochx","avocetss"],

    sports:    ["biathlon","canoeing","climbing","football","handball","lacrosse","marathon","shooting","softball","swimming",
                "aerobics","aquatics","archeryy","athletics→athletic","badmintn","baseball","basketbl","bicyclin","biathlon","bmxracing→bmxrac",
                "bobsled","bouldrng","bowling","boxercise→boxerci","canoeing","climbing","crossfit","curlings","cycling","decathlon→decath",
                "discustx","divingxx","dogsleds","dressage","drivegol","duathlon","equestri","fencings","fieldhoc","figursk"],

    objects:   ["backpack","briefcas","calendar","carriage","chairlft","chandeli","chemical","chimneyy","cleaning","clothing",
                "abacuses","abstract","acousics","acrylics","adamants","adapters","adhesive","adjuster","admirals","adorable",
                "advances","aeration","affidavt","afforded","agaragar","agencies","agitated","agitator","agnostic","agreeblt"],

    food:      ["avocados","barbecue","brocolic","cevichex","cherries","chestnut","chickpea","chilidog","chowderz","cinnamon",
                "almondss","amaranth","ambrosia","anchovie","anisesds","antipast","applesss","apricots","arrowrts","artchoke",
                "aspargus","avocadox","baconbit","bageltos","baklvaxx","balsamix","bananasx","barleybx","basmatis","battrdfs"],

    colors:    ["burgundy","charcoal","obsidian","cerulean","viridian","lavender","mahogany","platinum","sapphire","vermilion",
                "absinthe","admiralb","adventur","aerialbl","africanv","agateblk","agatered","alabaste","alazarin","albacore",
                "albatros","alcazaar","aldergrn","alexandr","algaegrn","alicante","alizarin","alkalibl","allarosa","allegifc"],

    jobs:      ["engineer","designer","director","producer","architct","scientst","lecturer","operator","plumberr","carpentr",
                "accountn","acrobatt","actressx","acupunct","adjudctr","admiralx","adorablt","advances","aerilist","agronomt",
                "aircrftx","airgardx","airmarsx","airpilot→airpilo","akeleith","aldermnn","aldermnx","algebrax","algorithmx→algorit","alladvoc"],

    tech:      ["database","software","hardware","protocol","internet","compiler","debugger","firewall","terminal","keyboard",
                "adaptrix","adobemax","advancex","affinity","agitates","agnostic","aimodels","airportx","algebrss","algorith",
                "alloyedx","allspark","alphacod","alphapro","alphatst","altamont","alternat","altitdex","aluminmx","amberxxx"],

    clothes:   ["jacketss","trousers","cardigan","raincoat","overcoat","swimsuit","tuxedoes","wardrobe","uniforms","costumes",
                "abayaxxx","abhorred","ablazess","abnormal","abruptly","absences","abstract","abundant","academic","accentss",
                "accruing","accurate","achieves","acrobatx","acrylixx","adamants","adapters","adhesivx","adjacent","admiring"],

    emotions:  ["hapiness","sadnesss","excitemnt","fearless","hopefull","jealousy","kindness","lonlines","nervousl","angrines",
                "abjectly","abruptly","abstains","absurdly","abysmalx","accusing","acrimony","actedout","addicted","admiress",
                "admonish","adorable","adroitly","advanced","adversly","affright","aflutter","agitated","agonized","aghastly"],

    body:      ["skeleton","shoulder","forehead","backbone","kneecaps","ligament","cartilag","muscular","arteries","organssz",
                "abdomens","abscessx","acupoint","adenoids","adiposes","adrenals","airwayss","albumins","alveolss","amygdalx",
                "ankleben","antibodx","aorticxx","appendix","armpitss","arterial","arthrits","articulr","astigmat","atrophis"],

    transport: ["airplane","railroad","seaships","tramways","highways","airports","harbours","seaports","vehicles","monorail",
                "airbuses","aircarrs","airlifts","airships","airsides","alightes","altirail","ambulanc","amphbous","anchorig",
                "aquaplnx","arctcexp","armoreds","artilery","astrobus","atracked","autobusx","autobyke","autocars","autohope"],

    places:    ["hospital","universy","workshop","bookshop","theaters","stadiums","galleris","museums","barracks","fortress",
                "abattoir","abbeylar","abodeswx","acropols","aerodrom","agencess","agorassy","airbasex","airports","alleyway",
                "almshaus","amphthtr","anchorge","annextss","aqueduct","arcadess","archways","arsenals","artgaler","artmusem"],

    tools:     ["drillers","grinders","cuttings","toolkits","machines","hardware","gearsets","fixtures","clampset","chiseled",
                "abrasive","adapters","adhesivx","adjustrs","aligners","alloyedx","alloyerx","alterats","ammeters","amplifix",
                "analogue","anchored","angleirs","annealer","anvilset","applicat","appraiss","arcweldr","armaturx","artwrkst"],

    games:     ["football","baseball","handball","softball","crickety","bowlingg","shooting","climbing","swimming","cyclingg",
                "abstrats","acrobatx","actiongm","activexp","adaptivx","addictve","adeptsgm","adjournd","advancts","adventre",
                "aerialxx","agilexxr","agilityg","agitated","aliensxx","alliesgx","allotmnt","alluregm","altargmx","altgamex"],

    verbs:     ["creating","learning","teaching","building","drivings","workings","helpings","callings","readings","writings",
                "abrasion→abrased","abstains","accruing","achieves","acupoint","adapting","adhering","adjustng","admirings→admir","adoptive",
                "adorning","advising","aerating","affirmed","affixing","afforded","agitates","agreeing","aligning","alluding"],

    space:     ["asteroid","blackhol","cosmolgy","galaxies","nebulase","pulsarss","quasarss","meteoric","vortexes","photonic",
                "protonic","nuclears","plasmoid","fusionss","gravitys","orbitals","cometoid","aurorase","eclipsed","solarsys",
                "lunarcyc","jovianbd","darkmatt","exoplane","intrstlr","cosmicry","wormhole","horizons","eventhzn","phasstrn",
                "crustaex","superntx","dwarfstr","giantstr","voidzone","ringzone","spinzone","polezone","wavezone","beamzone",
                "halozone","domezone","apexzone","riftzbox","corezone","masszone","warpzone","dustzone","exomoons","orbiters"],

    music:     ["melodics","rhythmic","harmonic","treblest","octaveds","bridging","choruses","versally","accentsd","timbrely",
                "sonatans","minuetss","fanfares","hymnally","ballades","stringed","guitared","violined","celloing","bassings",
                "scalings","pitching","tuningss","tempoesd","swingeds","bluesing","jazziest","rockster","folkiest","punkster",
                "soulster","operatic","choiring","pianoist","fortessi","mezzoist","canonist","fughtest","motetext","etudeing",
                "mazurkas","polkaing","waltzing","marching","lyricism","chanting","indieing","synthpop","discoing","houseing"],

    science:   ["atomical","protonss","photonss","quantums","plasmoid","fusionss","nuclears","quarkdom","bosonics","hadronix",
                "gluonics","leptonic","baryonic","enzymate","lipidics","sugarics","starchic","genomics","allelics","helixing",
                "chromads","ribosome","glucosed","fructose","peptides","aminoics","purining","pyrimidx","adenosix","thyminic",
                "guaninex","cytosing","uracilss","heliumss","carbonsz","oxygenss","sulfuric","phosphic","calciumx","sodiumsx",
                "coppersx","nickelsx","chromicx","potassix","magnesix","zincixx","ironicxx","goldicxx","silveric","leadicxx"],

    weather:   ["stormily","cloudily","frostily","frozenxx","breezily","squallly","drearily","sultrily","steamils","flurrily",
                "showered","drizzled","breezing","wintrily","autumnal","arcticly","tropicly","typhonic","tornadox","monsoony",
                "cyclonic","isobaric","nimbused","cumuloid","statusly","cirrusly","altocirx","warmthly","sleeting","blizzard",
                "heatwave","raindrop","snowfall","hailstom","guststor","ozonated","humidite","frontaly","ridgedly","tempedly",
                "wetdayix","fogdayix","windchix","icedayix","sundayix","clrdayix","drydayix","hotdayix","colddayx","rainwatx"],
  },


  9: {
    fruits:    ["blueberry","cranberry","pineapple","raspberry","nectarine","persimmon","starfruit","mulberrie","blackcurr","boysenber",
                "abricotyx","aceroacix","ackeefrxx","actinidix","agrumesxx","amarantxx","ambarelax","amontilxx","annattoxz","antipodex",
                "applejckx","apricotxx","aquafabax","aramburus","araucaxis","arbutussz","ardenciax","arondissx","arrabidax","arroyoesz",
                "artogoldx","arugulass","ascorbicx","asiminaxs","ataulfozs","atemoyaxx","azarolezs","babianaxx","baklavazs","balsampex"],

    countries: ["argentina","australia","indonesia","singapore","venezuela","guatemala","lithuania","nicaragua","slovakiax","hungarian",
                "afghanstx","albaniais","algeriaxs","andorraxs","angolaxzz","antiguaxx","argentinx","armeniasx","australix","austriaxx",
                "azerbaijx","bahamasxz","bahrainsz","banglades","barbadoss","belarussz","belgiumsz","belizexxs","bhutanssx","boliviaxs",
                "bosniaxxz","botswanaz","brazillsz","bruneissz","burkinaxz","burundixs","cambodixz","cameronsz","capevrdsz","centralfx"],

    animals:   ["alligator","crocodile","butterfly","dragonfly","porcupine","wolverine","greyhound","armadillo","kangaroos","elephants",
                "aardvarkx","albatross","alligatox","alpacasxx","amberjakx","amoebaxxx","amphibiax","anacondax","angelfish","antelopex",
                "antliuonx","apehanded","arrowhead","arthropod","aspreyyxx","assassinb","atollfixx","atomoths","auerochxx","avocetsxx",
                "axolotlxx","baboonssl","bandicoox","barnacles","bassharkx","batfishxx","beaverrxx","beetles","belugasxx","bisonssxx"],

    sports:    ["athletics","badminton","motocross","taekwondo","waterpolo","wrestling","gymnasium","freestyle","snowboard","kickboxng",
                "aerobicss","aquaticss","archeryyy","athlticss","badmintnx","baseballl","basketbll","bicycling","biathlonx","bmxracinx",
                "bobsleddx","bouldrngx","bowlingxx","boxercisx","canoeingg","climbingx","crossfitx","curlingxx","cyclingxx","decathlnx",
                "discustxx","divingxxx","dogsledsx","dressagex","drivegolx","duathlonx","equestrxx","fencingxx","fieldhoxx","figureskg"],

    objects:   ["backpacks","briefcase","calendars","carriages","chairlift","chandelier→chandeli","chemicals","chimneys","cleaning","clothing",
                "abacusesz","abstractz","acoustics","acrylicsz","adamantsz","adaptersx","adhesivex","adjusters","admiralsx","adorables",
                "advancesz","aerations","affidavts","affordedz","agaragarx","agenciess","agitatedx","agitators","agnosticz","agreeblts"],

    food:      ["avocadoes","barbecued","broccolis","cevichard","cherriess","chestnuts","chickpeas","chilidogs","chowderss","cinnamons",
                "almondsss","amaranths","ambrosiax","anchovies","anisesedx","antipasti","applessss","apricotss","arrowrots","artichoke",
                "asparagus","avocadoes","baconbits","bageltons","baklavaxx","balsamics","bananasss","barleybrs","basmatisx","batteredf"],

    colors:    ["turquoise","chocolate","goldenrod","slategray","royalblue","darkgreen","lightblue","crimsonly","lavenders","seagreens",
                "absinther","admiralbr","adventurx","aerialblx","africanvx","agateblkx","agateredx","alabasterx→alabaste","alazarinx","albacorez",
                "albatrosx","alcazaarx","aldergrns","alexandrx","algaegrnx","alicantex","alizarinx","alkaliblx","allarosas","allegifc",
                "alligatorx→alligato","allsparks","almondblx","almondrex","almondrox","almondsandx→almondsn","almondsnx","almondszx","almondsxx","almondsyx"],

    jobs:      ["developer","architect","scientist","mechanics","electricn","plumberrr","engineerr","operatorr","technicin","professor",
                "accountns","acrobatts","actresssz","acupunctx","adjudctrs","admiralss","adorablts","advancesz","aerilists","agronomts",
                "aircraftx","airgardss","airmarsx","airpilots","akeleitzs","aldermnnz","aldermnxs","algebraxz","algorithmx","alladvocs"],

    tech:      ["algorithm","framework","interface","processor","bandwidth","cybersecu","debugging","rendering","streaming","protocols",
                "adaptrixs","adobemaxs","advancexs","affinityy","agitatess","agnostics","aimodelsx","airportsx","algebrssz","algorithm",
                "alloyedxx","allsparkx","alphacods","alphapros","alphatsts","altamonts","alternats","altitdexs","aluminmxs","amberxxxx"],

    clothes:   ["overcoats","sweatpant","jacketsss","uniformss","cardigans","raincoats","wardrobes","swimsuits","costumess","tuxedoesx",
                "abayaxxxx","abhorredsz","ablazessz","abnormals","abruptlys","absencesz","abstracts","abundants","academics","accentsss",
                "accruings","accurates","achievess","acrobatxx","acrylixxx","adamantss","adapterss","adhesivxs","adjacents","admirings"],

    emotions:  ["happiness","sadnesses","fearfully","nervously","angriness","excitedly","hopefully","jealously","kindnesss","lonliness",
                "abjectlys","abruptlys","abstainss","absurdlys","abysmalxx","accusings","acrimonys","actedouts","addicteds","admiresss",
                "admonishs","adorables","adroitlys","advanceds","adverslys","affrightz","aflutterz","agitatedz","agonizeds","aghastlys"],

    body:      ["heartbeat","shoulders","foreheads","backbones","kneecapss","ligaments","cartilage","musculars","arteriess","organssss",
                "abdomens","abscessxs","acupoints","adenoidal","adiposess","adrenalss","airwayssz","albuminsz","alveolssz","amygdalxs",
                "anklebens","antibodys","aorticsxx","appendixs","armpitssz","arterials","arthritss","articulrs","astigmats","atrophiss"],

    transport: ["airplanes","railroads","seashipss","tramwayss","highwayss","airportss","harbourss","runwayyyy","seaportss","vehiclesx",
                "airbusess","aircarrss","airlifts","airshipsz","airsidesz","alightess","altirailz","ambulancs","amphbouss","anchorig",
                "aquaplnxs","arctcexps","armoredss","artilenys","astrobuss","atrackesx","autobusfx","autobykes","autocarsx","autohopes"],

    places:    ["hospitals","universit","cafeteria","workshops","bookshops","theatress","stadiumss","galleries","officesss","museumsss",
                "abattoirx","abbeylarx","abodeswxx","acropolis","aerodroms","agencesss","agorassys","airbasexs","airportss","alleyways",
                "almshauss","amphthtrs","anchorgex","annextsss","aqueducts","arcadessz","archwayzs","arsenalsz","artgalerx","artmusems"],

    tools:     ["drillings","grindings","cuttinggg","toolkitss","machinexs","hardwarex","softwarex","devicesxx","gearsetss","fixturesx",
                "abrasives","adaptersx","adhesivxs","adjustrss","alignerss","alloyedxs","alloyerxx","alteratss","ammetersz","amplifixz",
                "analogues","anchoredsz","angleairx","annealers","anvilsets","applicatx","appraissz","arcweldrs","armaturs","artwrksts"],

    games:     ["footballl","baseballl","handballl","softballl","crickettt","bowlinggg","shootingg","climbingg","swimmingg","cyclinggg",
                "abstractz","acrobatxx","actiongms","activexps","adaptivxs","addictves","adeptsgms","adjourndz","advanctsz","adventrex",
                "aerialxxs","agilexxrs","agilitygz","agitateds","aliensxxs","alliesgxz","allotmntx","alluregms","altargmxs","altgamexs"],

    verbs:     ["developng","searching","returning","choosingg","creatingg","learningg","teachingg","buildingg","drivinggg","workinggg",
                "abrasions","abstainss","accruilng","achievess","acupointx","adaptings","adheringx","adjustngs","admirings","adoptives",
                "adornings","advisings","aeratings","affirmeds","affixings","affordeds","agitatesx","agreeings","alignings","alludings"],

    space:     ["asteroids","blackhole","cosmology","galaxiess","nebulases","pulsarsss","quasarsss","meteorics","vortexess","photonics",
                "protonics","nuclearse","plasmoids","gravitons","orbitalsz","cometsoid","aurorasez","eclipseds","solarsysm","lunarcycl",
                "jovianbdd","darkmattr","exoplanet","intrstllr","cosmicray","wormholes","horizoneq","eventhrzn","phasestrs","crustaxyz",
                "superntxx","dwarfstrs","giantstrs","voidzones","ringzones","spinzones","polezones","wavezones","beamzones","halozones",
                "domezones","apexzones","riftzboxz","corezones","masszones","warpzones","dustzones","exomoonss","orbitersz","astroblst"],

    music:     ["melodicss","rhythmica","harmonics","treblests","octavedly","bridgings","chorusses","versallys","accenteds","timbredly",
                "sonatansz","minuetsse","fanfaress","hymnallyz","balladess","stringeds","guitaredx","violinedx","celloings","basingly",
                "scalingss","pitchings","tuningssz","tempoedsz","swingedly","bluesings","jazziests","rocksters","folkiests","punksters",
                "soulsters","operatics","choirings","pianoists","fortessiz","mezzoists","canonists","fughests","motetexts","etudingss",
                "mazurkass","polkaings","waltzings","marchings","lyricisms","chantings","indieingg","synthpops","discoings","houseings"],

    science:   ["atomicals","protonics","photonics","quantumsz","plasmoids","fusionics","nuclearse","quarkdoms","bosonicsz","hadronics",
                "gluonixcs","leptonics","baryonics","enzymates","lipidicss","sugaricss","starchics","genomicsz","allelicss","helixings",
                "chromadsz","ribosomes","glucoseds","fructoses","peptidess","aminoicss","puriningg","pyrimidxs","adenosixs","thyminics",
                "guaninexs","cytosingg","uracilsss","heliumsss","carbonszz","oxygensss","sulfurics","phosphics","calciummx","sodiumsxx",
                "coppersxx","nickelsxx","chromicxx","potassixs","magnesixs","zincixxxs","ironicxxx","goldicxxx","silvericx","leadicxxx"],

    weather:   ["stormilys","cloudilys","frostilys","frozenxxx","breezilys","squallsly","drearilyy","sultrilly","steamills","flurrilys",
                "showerinx","drizzledx","breezings","wintrilys","autumnals","arctically","tropicall","typhonics","tornadoes","monsoonal",
                "cyclonics","isobarics","nimbusesd","cumuloids","statuslys","cirruslys","altocirxs","warmthlyy","sleetings","blizzards",
                "heatwaves","raindrops","snowfalls","hailstoms","guststors","ozonation","humiditic","frontalys","ridgedly","tempedlys",
                "wetdayixs","fogdayixs","windchixs","icedayixs","sundayixs","clrdayixs","drydayixs","hotdayixs","colddayxs","rainwatrs"],
  },


  10: {
    fruits:    ["strawberry","watermelon","blackberry","grapefruit","mangosteen","elderberry","gooseberry","cloudberry","loganberry","breadfruit",
                "abricotyzx","aceroacixz","ackeefrxxz","actinidixz","agrumesxxz","amarantxxz","ambarelaxz","amontilxxz","annattoxzz","antipodexz",
                "applejckxz","apricotxxz","aquafabaxz","arambursz","araucaxizz","arbutusszz","ardenciaxz","arondissxz","arrabidaxz","arroyoeszz",
                "artogoldxz","arugulazsz","ascorbicxz","asiminaxsz","ataulfozss","atemoyaxxz","azarolezss","babianaxxz","baklavazss","balsampexz"],

    countries: ["azerbaijan","bangladesh","kyrgyzstan","luxembourg","madagascar","mozambique","tajikistan","uzbekistan","afghanistan","switzerland",
                "afghanstnz","albaniaiss","algeriaxxs","andorraxxs","angolaxzzz","antiguaxxx","argentiinx","armeniasxx","australixx","austriaxxx",
                "azerbaijxx","bahamasxzz","bahrainsxx","bangladesz","barbadossz","belarussxz","belgiumszz","bbelizexss","bhutanssxz","boliviaxxs",
                "bosniaxxxz","botswanazz","brazillszz","bruneisszz","burkinaxzz","burundixss","cambodixzz","cameronszz","capevrdsxz","centralfxx"],

    animals:   ["chimpanzee","roadrunner","woodpecker","salamander","copperhead","chinchilla","anglerfish","bluebottle","grasshopr","rattlesnke",
                "aardvarkxx","albatrossz","alligatoxx","alpacasxxx","amberjakxz","amoebaxzxx","amphibiaxx","anacondaxx","angelfishz","antelopexz",
                "antliuonxz","apehanded","arrowheadz","arthropodz","aspreyyxxz","assassinbz","atollfixxz","atomoths","auerochxxz","avocetsxxz",
                "axolotlxxz","baboonslzz","bandicooxx","barnaclesz","bassharkxz","batfishxxz","beaverrrxz","beetlesxzz","belugasxxz","bisonssxzz"],

    sports:    ["basketball","volleyball","gymnastics","skateboard","equestrian","dragonboat","cyclocross","paddleball","kettlebell","rappelling",
                "aerobicssz","aquaticssz","archeryyyy","athlticssz","badmintnxz","baseballll","basketbllz","bicyclingg","biathlonxz","bmxracinxz",
                "bobsleddxz","bouldrngxz","bowlingxxx","boxercisxz","canoeinggz","climbingxz","crossfitxz","curlingxxx","cyclingxxz","decathlnxz",
                "discustxxz","divingxxxz","dogsledsxz","dressagexz","drivegolxz","duathlonxz","equestrxxz","fencingxxz","fieldhoxxz","figureskg"],

    objects:   ["microscope","calculator","waterproof","binoculars","saddlebags","tablecloth","paintbrush","thumbscrew","screwdriver→screwdri","skateboard",
                "abacuseszz","abstractzz","acousticsz","acrylicszz","adamantszz","adapterszz","adhesivexx","adjustersz","admiralszz","adorablesz",
                "advanceszz","aerationss","affidavtss","affordedzz","agaragarzz","agenciessz","agitatedzz","agitatorss","agnosticzz","agreebltsz"],

    food:      ["strawberry","watermelon","blueberries→blueberri","raspberries→raspberri","gooseberry","elderberry","blackberry","boysenberry→boysenber","loganberry","breadfruit",
                "almondssss","amaranthss","ambrosiaxs","anchoviesz","anisesedxs","antipastis","applesssss","apricotssz","arrowrotsz","artichokes",
                "asparaguss","avocadoess","baconbitss","bageltonss","baklavaxxx","balsamicss","bananasssz","barleybrsz","basmatisf","batterdbss"],

    colors:    ["lightgreen","darkviolet","skyblueeem","deepyellow","brightreds","orangetone","softpurple","palegolden","darkorange","lightcoral",
                "absinthexx","admiralbrs","adventurxx","aerialblxx","africanvxx","agateblkxx","agateredxx","alabasterx","alazarinxx","albacorezz",
                "albatrossz","alcazaarzz","aldergrnsz","alexandrxx","algaegrnxz","alicantexz","alizarinxz","alkaliblxz","allarosasx","allegifc",
                "alligatozz","allsparkss","almondblxx","almondrexx","almondroxx","almondsand","almondsnxx","almondszxx","almondsxxx","almondsyxx"],

    jobs:      ["programmer","electricin","mechanical","technician","accountant","consultant","supervisor","researcher","translator","journalist",
                "accountnss","acrobattss","actresssxz","acupunctxs","adjudctrsz","admiralssz","adorabltsz","advanceszz","aerilistss","agronomtsz",
                "aircraftxs","airgardssz","airmarsxzs","airpilotss","akeleitzss","aldermnnzz","aldermnxss","algebraxzz","algorithmxz","alladvocss"],

    tech:      ["javascript","typescript","deployment","encryption","automation","databasexx","networking","cybersecur","processing","virtualiza",
                "adaptrixss","adobemaxss","advancexss","affinityys","agitatesss","agnosticsz","aimodelsxs","airportsxs","algebrssxz","algorithms",
                "alloyedxxz","allsparkxz","alphacodss","alphapross","alphatsts","altamontsz","alternatsz","altitdexss","aluminmxss","amberxxxxx"],

    clothes:   ["sweatshirt","tracksuits","jacketsxxx","uniformxxx","cardiganxx","raincoatsx","overcoatss","swimsuitss","wardrobess","costumesss",
                "abayaxxxxz","abhorredsxz","ablazessxz","abnormalsz","abruptlysz","absenceszz","abstractss","abundantsz","academicsz","accentsssz",
                "accruingsz","accuratess","achievessz","acrobatxxz","acrylixxx","adamantssz","adapterssz","adhesivxss","adjacentsz","admiringsz"],

    emotions:  ["happinessx","sadnesssss","excitement","nervousnes","fearlessns","hopefulness","jealousnes","kindnessss","loneliness","angerlevel",
                "abjectlysz","abruptlysz","abstainssz","absurdlysz","abysmalxxz","accusingsz","acrimonysz","actedoutsz","addictedss","admiressss",
                "admonishss","adorablesz","adroitlysz","advancedss","adverslysz","affrightzz","aflutterzz","agitatedsz","agonizedsz","aghastlysz"],

    body:      ["circulatry","respirator","digestivex","skeletalss","muscularsy","nervoussys","endocrinex","reproductv","integumntx","lymphaticz",
                "abdomensxx","abscessxss","acupointsz","adenoidals","adiposessz","adrenalssz","airwayssxz","albuminsxz","alveolssxz","amygdalxss",
                "anklebensz","antibodyss","aorticsxxx","appendixss","armpitssxz","arterialsz","arthritssz","articulrsz","astigmatss","atrophissz"],

    transport: ["helicopter","motorcycle","submarines","spaceships","aircraftss","locomotive","hovercraft","jetlinerss","railwayyyy","tramwaysss",
                "airbusessz","aircarrssz","airliftsss","airshipsxz","airsidesxz","alightessz","altirailxz","ambulancss","amphboussz","anchorigxz",
                "aquaplnxss","arctcexpsz","armoredssz","artilenysz","astrobusss","atrackesx","autobusfxs","autobykess","autocarssz","autohopess"],

    places:    ["restaurant","university","hospitalss","government","department","laboratory","playground","stadiumsss","bookstoree","supermarke",
                "abattoirxx","abbeylarxx","abodeswxxx","acropoliss","aerodroms","agencesss","agorassysz","airbasexss","airportssz","alleywayzz",
                "almshauss","amphthtrss","anchorgexs","annextsssz","aqueductsz","arcadessxz","archwayzss","arsenalszz","artgalerxx","artmusemsz"],

    tools:     ["machineryy","equipments","instrument","apparatusx","gearboxesx","workshopsx","toolkitsxx","hardwaress","softwaress","devicesxxx",
                "abrasivess","adapterssz","adhesivxss","adjustrssz","alignerssz","alloyedxss","alloyerxxx","alteratssz","ammetersxz","amplifixzz",
                "analoguess","anchoredsz","angleairxz","annealeers","anvilsetss","applicatxs","appraissxz","arcweldrsz","armaturxss","artwrkstss"],

    games:     ["basketball","volleyball","gymnastics","tabletenis","badmintonx","footballll","handballll","softballll","cricketlll","baseballl",
                "abstractzz","acrobatxxx","actiongmsz","activexpss","adaptivxss","addictves","adeptsgmsz","adjourndxz","advanctsxz","adventrexx",
                "aerialxxss","agilexxrss","agilitygxz","agitatedss","aliensxxss","alliesgxxz","allotmntxs","alluregmss","altargmxxs","altgamexss"],

    verbs:     ["developing","processing","generating","calculatng","designingg","constructi","implementi","optimizing","analyzingg","debuggingg",
                "abrasionss","abstainssz","accruings","achievessz","acupointsz","adaptingss","adheringxs","adjustngsz","admiringsz","adoptivess",
                "adorningss","advisingsz","aeratingss","affirmedss","affixingss","affordedss","agitatesss","agreeinggs","aligningsz","alludingsz"],

    space:     ["asteroidss","blackholes","cosmologys","galaxiesss","nebulaesss","pulsarssss","quasarssss","meteorites","vortexesss","photonicsz",
                "protonicsz","nuclearses","plasmoidss","gravitonss","orbitalszs","cometsoids","aurorasezs","eclipsedss","solarsysms","lunarcycls",
                "jovianbeds","darkmattrx","exoplanets","intrstllrs","cosmicrays","wormholess","horizoneqs","eventhrzns","phasestrsz","crustaxyzs",
                "supernovas","dwarfstrsz","giantstrsz","voidzonexs","ringzonexs","spinzonexs","polezonexs","wavezonexs","beamzonexs","halozonexs",
                "domezonexs","apexzonexs","riftzboxzs","corezonexs","masszonexs","warpzonexs","dustzonexs","exomoonssz","orbitersss","astroblsts"],

    music:     ["melodicaly","rhythmical","harmonical","treblestsz","octavingly","bridgingly","chorusedsz","versallysz","accentedly","timbredlys",
                "sonatansss","minuetssss","fanfaresss","hymnallyss","balladessz","stringedly","bowingszsz","guitaredly","violinedly","celloingly",
                "bassinglys","scalingssz","pitchingly","tuningssss","tempoedssz","swingingly","bluesingss","jazziedsts","rockstrsss","folkiestsz",
                "punkstrsss","soulstrsss","operatical","choiringss","pianoistss","fortessizs","mezzoistss","canonistss","fughestsss","motetextss",
                "etudingssz","mazurkasss","polkaingss","waltzingly","marchingly","lyricismss","chantingly","indieingss","synthpopss","discoinggs"],

    science:   ["atomicallx","protonicsz","photonicsz","quantumsss","plasmoidss","fusionicsz","nuclearsex","quarkdomss","basonicsss","hadronicsz",
                "gluonixcss","leptonicsz","baryonicsz","enzymatess","lipidicsss","sugaricsse","starchicss","genomicsss","allelicssz","helixingss",
                "chromadsss","ribosomess","glucosedss","fructosess","peptidessz","aminoicsss","puriningss","pyrimidxss","adenosixss","thyminicss",
                "guaninexss","cytosingss","uracilssss","heliumssss","carbonszss","oxygenssss","sulfuricsz","phosphicss","calciumxxs","sodiumsxxs",
                "coppersxxs","nickelsxxs","chromicxxs","potassixss","magnesixss","zincicsxss","ironicxxss","goldicxxss","silvericss","leadicxxss"],

    weather:   ["stormilysz","cloudilysz","frostilysz","frozennnxx","breezilysz","squallslys","drearilyss","sultrillyy","steamillss","flurrilysz",
                "showeringx","drizzledsz","breezingss","wintrillyy","autumnalss","arctically","tropically","typhonicsz","tornadoesz","monsoonals",
                "cyclonicsz","isobaricsz","nimbusesdz","cumuloidss","statuslyss","cirruslyss","altocirxss","warmthlysz","sleetingly","blizzardss",
                "heatwavess","raindropsz","snowfallss","hailstomss","guststorss","ozonations","humiditicx","frontallys","ridginglyy","tempedlyss",
                "wetdayixss","fogdayixss","windchixss","icedayixss","sundayixss","clrdayixss","drydayixss","hotdayixss","colddayxss","rainwatrss"],
  },

};

const select = document.getElementById("type");

let allCategories = new Set();

Object.values(wordsByLength).forEach(group => {
  Object.keys(group).forEach(key => {
    allCategories.add(key);
  });
});

allCategories.forEach(category => {
  const option = document.createElement("option");
  option.value = category;
  option.textContent = category;
  select.appendChild(option);
});

let numberLettersSelect =document.querySelector('#numbers');
let typeWordSelect =document.querySelector('#type');

numberLettersSelect.value='';
typeWordSelect .value='';

numberLettersSelect.disabled= true;
numberLettersSelect.style.pointerEvents = "none";
numberLettersSelect.style.opacity = "0.3";

let letters= document.querySelectorAll("main .letters div")
letters.forEach(letter=>{
	letter.disabled= true;
	letter.style.pointerEvents = "none";
  letter.style.opacity = "0.3";
})


typeWordSelect.addEventListener('input',()=> {
	
	typeWordSelect.disabled= true;
typeWordSelect.style.pointerEvents = "none";
typeWordSelect.style.opacity = "0.3";
	
	numberLettersSelect.disabled= false;
	numberLettersSelect.style.pointerEvents = "auto";
  numberLettersSelect.style.opacity = "1";
  
})



numberLettersSelect.addEventListener("input", function () {

let randomIndex = Math.floor(Math.random()
  *wordsByLength[numberLettersSelect.value][typeWordSelect.value].length);
  randomItem = wordsByLength[numberLettersSelect.value][typeWordSelect.value][+randomIndex];
  console.log(randomItem)
  
  creatingInputs(randomItem);
  
  numberLettersSelect.disabled= true;
numberLettersSelect.style.pointerEvents = "none";
numberLettersSelect.style.opacity = "0.3";

letters.forEach(letter=>{
	letter.disabled= false;
	letter.style.pointerEvents = "auto";
  letter.style.opacity = "1";
})
});

 function creatingInputs(randomItem) {
  const inputsRow = document.createElement("div");
  inputsRow.classList.add("inputs-row");

  document.querySelector("main .inputs-game").append(inputsRow);

  for (let i = 0; i < randomItem.length; i++) {
    const input = document.createElement("input");
    input.type = "text";
    input.setAttribute('maxlength', '1');
    input.style.pointerEvents = "none";
    input.classList.add(`input-${i}`)
    inputsRow.appendChild(input);
  }
} 

const allLetters = document.querySelectorAll(`main .letters div`);

allLetters.forEach(letter => {
	
  letter.addEventListener("click", function () {
    valuesInputsAndCheck(randomItem,this.textContent);
    this.disabled= true;
    this.style.pointerEvents = "none";
    this.style.opacity = "0.3";
  });
  
});
let counterImages= 0
let counterLetters=0

function valuesInputsAndCheck(randomItem,clickedLetter) {
	let loweredRandomItem=randomItem.toLowerCase();
  let loweredClickedLetter= clickedLetter.toLowerCase();
  if(loweredRandomItem.includes(loweredClickedLetter) === true){
	for(let i = 0; i< loweredRandomItem.length;i++){
    if (loweredRandomItem[i] == loweredClickedLetter) {
      document.querySelector(`.input-${i}`).style.backgroundColor="green";
      document.querySelector(`.input-${i}`).classList.add("green");
      document.querySelector(`.input-${i}`).style.color="white";
      document.querySelector(`.input-${i}`).value= loweredClickedLetter
      counterLetters+=1
    }}
  }
  else{
	if(counterImages !== hangedManImages.length-1){
	document.querySelector(".hanged-man-images img").setAttribute("src",hangedManImages[counterImages]);
	counterImages+=1
 } else{
	losing()
 }
}
let linkedWordInputs = [];
let inputsAll = document.querySelectorAll(".inputs-game input");

inputsAll.forEach(input => {
  linkedWordInputs.push(input.value);
});

if(linkedWordInputs.join("") === randomItem){
	wining()
}
}

function removeAllForMessage() {
  document.querySelector('body header').style.opacity = '0.3';
  document.querySelector('body main').style.opacity = '0.3';
  document.querySelector('body footer').style.opacity = '0.3';
}
function losing() {
  removeAllForMessage();
  const losingMessage = document.querySelector('main .message');
  creatingMessage(losingMessage, '#ef4444', `😅 Nice try — don't give up! The word was "${randomItem}"`);
  playAgain();
  localStorage.setItem("score", 0);
  scoreP.textContent = `your score is : ${localStorage.getItem("score")}`;
  
  letters.forEach(letter=>{
	letter.disabled= true;
	letter.style.pointerEvents = "none";
  letter.style.opacity = "0.3";
  document.querySelector(".hanged-man-images img").setAttribute("src",hangedManImages[hangedManImages.length-1]);
})
}
function wining() {
  removeAllForMessage();
  const winingMessage = document.querySelector('main .message');
  creatingMessage(winingMessage, '#22c55e', '🎉 Congratulations! You nailed it! You guessed the word correctly');
  playAgain();
  if(counterImages<= 2){
	localStorage.setItem("score", Number(localStorage.getItem("score")) + 20);
  }
  else{
  localStorage.setItem("score", Number(localStorage.getItem("score")) + 10);
  }
  
  scoreP.textContent = `your score is : ${localStorage.getItem("score")}`;
  
  letters.forEach(letter=>{
	letter.disabled= true;
	letter.style.pointerEvents = "none";
  letter.style.opacity = "0.3";
})
}
function creatingMessage(element, pColor, text) {
  element.style.position = 'fixed';
  element.style.left = '50%';
  element.style.top = '50%';
  element.style.transform = 'translate(-50%,-50%)';
  element.style.zIndex = '1000';

  element.style.backgroundColor = 'rgba(15,23,42,0.98)';
  element.style.border = '1px solid #38bdf8';
  element.style.padding = '40px 30px 30px';
  element.style.borderRadius = '16px';
  element.style.boxShadow = '0 8px 40px rgba(0,0,0,0.6)';
  element.style.textAlign = 'center';
  element.style.width = 'min(90vw, 420px)';
  element.style.minHeight = '200px';
  element.style.display = 'flex';
  element.style.flexDirection = 'column';
  element.style.justifyContent = 'center';
  element.style.alignItems = 'center';
  element.style.gap = '16px';

  const closeBtn = document.createElement('button');
  closeBtn.classList.add('close-btn');
  closeBtn.innerText = '✕';
  closeBtn.style.position = 'absolute';
  closeBtn.style.top = '10px';
  closeBtn.style.right = '10px';
  closeBtn.style.backgroundColor = '#ef4444';
  closeBtn.style.color = 'white';
  closeBtn.style.width = '30px';
  closeBtn.style.height = '30px';
  closeBtn.style.display = 'flex';
  closeBtn.style.alignItems = 'center';
  closeBtn.style.justifyContent = 'center';
  closeBtn.style.borderRadius = '50%';
  closeBtn.style.cursor = 'pointer';
  closeBtn.style.fontSize = '14px';
  closeBtn.style.fontWeight = 'bold';

  closeBtn.onclick = function () {
    element.remove();
    document.querySelector('body header').style.opacity = '1';
    document.querySelector('body main').style.opacity = '1';
    document.querySelector('body footer').style.opacity = '1';
  };

  const p = document.createElement('p');
  p.innerText = text;
  p.style.fontSize = 'clamp(14px, 3.5vw, 18px)';
  p.style.color = pColor;
  p.style.fontWeight = '800';
  p.style.lineHeight = '1.5';

  element.append(closeBtn);
  element.append(p);
  document.body.append(element);
}

function playAgain() {
  const playAgainBtn = document.createElement('button');
  playAgainBtn.innerText = "Play Again";
  playAgainBtn.style.padding = '12px 30px';
  playAgainBtn.style.fontSize = 'clamp(14px, 3vw, 18px)';
  playAgainBtn.style.fontWeight = 'bold';
  playAgainBtn.style.color = '#fff';
  playAgainBtn.style.background = 'linear-gradient(135deg, #00c853, #64dd17)';
  playAgainBtn.style.border = 'none';
  playAgainBtn.style.borderRadius = '30px';
  playAgainBtn.style.cursor = 'pointer';
  playAgainBtn.style.boxShadow = '0 5px 15px rgba(0,200,83,0.4)';
  playAgainBtn.style.transition = '0.3s ease';
  playAgainBtn.addEventListener('click', () => { location.reload(); });
  document.querySelector(".message").appendChild(playAgainBtn);
}