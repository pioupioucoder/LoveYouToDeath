[
  {
    "id": "chapter1",
    "number": 1,
    "file": "chapter1.json",

    "title_en": "The First Meeting",
    "title_fr": "La Première Rencontre",

    "description_en": "A chance encounter on a rain-soaked evening. Something stirs beneath the silence.",
    "description_fr": "Une rencontre fortuite par un soir de pluie. Quelque chose s'éveille sous le silence.",

    "tag": "PROLOGUE",

    "thumbnail": "img/chapters/ch1_bg.jpg",

    "charImg": "img/characters/ch1_character.png",
    "charImg_en": "img/characters/ch1_character.png",
    "charImg_fr": "img/characters/ch1_character.png",

    "charName": "Elias",
    "charName_en": "Elias",
    "charName_fr": "Elias"
  },
  {
    "id": "chapter2",
    "number": 2,
    "file": "chapter2.json",

    "title_en": "Whispers in the Dark",
    "title_fr": "Murmures dans l'Ombre",

    "description_en": "Secrets begin to surface. Trust is a fragile, dangerous thing.",
    "description_fr": "Les secrets remontent à la surface. La confiance est une chose fragile et dangereuse.",

    "tag": "CHAPTER I",

    "thumbnail": "img/chapters/ch2_bg.jpg",

    "charImg": "img/characters/ch2_character.png",
    "charImg_en": "img/characters/ch2_character.png",
    "charImg_fr": "img/characters/ch2_character.png",

    "charName": "Elias",
    "charName_en": "Elias",
    "charName_fr": "Elias"
  },
  {
    "id": "chapter3",
    "number": 3,
    "file": "chapter3.json",

    "title_en": "The Bleeding Hour",
    "title_fr": "L'Heure Saignante",

    "description_en": "Every choice leaves a scar. How far will you go for someone who might destroy you?",
    "description_fr": "Chaque choix laisse une cicatrice. Jusqu'où iras-tu pour quelqu'un qui pourrait te détruire?",

    "tag": "CHAPTER II",

    "thumbnail": "img/chapters/ch3_bg.jpg",

    "charImg": "img/characters/ch3_character.png",
    "charImg_en": "img/characters/ch3_character.png",
    "charImg_fr": "img/characters/ch3_character.png",

    "charName": "Elias",
    "charName_en": "Elias",
    "charName_fr": "Elias"
  },
  {
    "id": "chapter4",
    "number": 4,
    "file": "chapter4.json",

    "title_en": "No Return",
    "title_fr": "Sans Retour",

    "description_en": "The final thread unravels. All roads lead to one truth — love me to death.",
    "description_fr": "Le dernier fil se dénoue. Tous les chemins mènent à une vérité — aime-moi jusqu'à la mort.",

    "tag": "FINALE",

    "thumbnail": "img/chapters/ch4_bg.jpg",

    "charImg": "img/characters/ch4_character.png",
    "charImg_en": "img/characters/ch4_character.png",
    "charImg_fr": "img/characters/ch4_character.png",

    "charName": "Elias",
    "charName_en": "Elias",
    "charName_fr": "Elias"
  }
]


//


[
  {
    "id": "s_cafe_1",
    "bg": "images/backgrounds/cafetaria.webp",
    "character": "Dazai",
    "charImg": null,
    "speaker": null,
    "text": "Comme chaque matin, je retrouve Dazai à la cafétéria. L’odeur du café caresse délicatement mes narines.",
    "typeSpeed": 20,
    "music": "music/room.mp3",
    "next": "s_cafe_2"
  },
  {
    "id": "s_cafe_2",
    "bg": "images/backgrounds/dazaicafethink.webp",
    "character": null,
    "charImg": null,
    "speaker": null,
    "text": "Des années ont passé depuis notre rencontre, et pourtant aujourd’hui… son regard vide vers la fenêtre, le sourire éteint, sans un bruit. Je ne sais pas ce qui le tracasse.",
    "typeSpeed": 25,
    "music": "music/reflexion.mp3",
    "waitForClick": true,
    "next": "s_cafe_2b"
  },
  {
    "id": "s_cafe_2b",
    "bg": "images/backgrounds/dazaicafethink.webp",
    "character": null,
    "charImg": null,
    "speaker": null,
    "text": "Une question me trouble : est-ce que je le connais vraiment ?",
    "typeSpeed": 22,
    "music": "music/reflexion.mp3",
    "waitForClick": true,
    "next": "s_cafe_3"
  },
  {
    "id": "s_cafe_3",
    "bg": "images/backgrounds/dazaiwatch.webp",
    "character": "Dazai",
    "charImg": null,
    "speaker": "Dazai",
    "text": "Atsushi-kun… Je sens ton regard peser sur moi depuis un moment. Tu veux me dire quelque chose ?",
    "typeSpeed": 20,
    "music": "music/reflexion.mp3",
    "choices": [
      {
        "text": "Je me demandais simplement à quoi tu pensais.",
        "affinityDelta": 0,
        "next": "s_choix1_pensee"
      },
      {
        "text": "Parfois, j’ai l’impression de ne pas te connaître.",
        "affinityDelta": 10,
        "next": "s_choix2_inconnu"
      },
      {
        "text": "Rien d'important.",
        "affinityDelta": -10,
        "next": "s_choix3_rien"
      }
    ]
  },
  {
    "id": "s_choix1_pensee",
    "bg": "images/backgrounds/cafesurprise.webp",
    "character": "Atsushi",
    "charImg": null,
    "speaker": "Atsushi",
    "text": "Je me demandais simplement à quoi tu pensais.",
    "typeSpeed": 18,
    "music": "music/reflexion.mp3",
    "next": "s_reponse_dazai_1"
  },
  {
    "id": "s_reponse_dazai_1",
    "bg": "images/backgrounds/cafespeak.webp",
    "character": "Dazai",
    "charImg": null,
    "speaker": "Dazai",
    "text": "Je pensais à ce qu’on va manger ce soir.",
    "typeSpeed": 18,
    "music": "music/reflexion.mp3",
    "next": "s_proposition_diner"
  },
  {
    "id": "s_choix2_inconnu",
    "bg": "images/backgrounds/cafesmile.webp",
    "character": "Atsushi",
    "charImg": null,
    "speaker": "Atsushi",
    "text": "Parfois, j’ai l’impression de ne pas te connaître.",
    "typeSpeed": 25,
    "music": "music/reflexion.mp3",
    "next": "s_dazai_perplexe"
  },
  {
    "id": "s_dazai_perplexe",
    "bg": "images/backgrounds/cafespeak.webp",
    "character": "Dazai",
    "charImg": null,
    "speaker": "Dazai",
    "text": "Pourquoi penses-tu cela ?",
    "typeSpeed": 15,
    "music": "music/reflexion.mp3",
    "next": "s_atsushi_hesite"
  },
  {
    "id": "s_atsushi_hesite",
    "bg": "images/backgrounds/cafesmile.webp",
    "character": "Atsushi",
    "charImg": null,
    "speaker": null,
    "text": "J'hésite un instant",
    "typeSpeed": 30,
    "music": "music/reflexion.mp3",
    "next": "s_dazai_hesitee"
  },
  {
    "id": "s_dazai_hesitee",
    "bg": "images/backgrounds/cafesmile.webp",
    "character": "Atsushi",
    "charImg": null,
    "speaker": "Atsushi",
    "text": "J'ignore ce qui te préoccupe. Comme en ce moment.",
    "typeSpeed": 22,
    "music": "music/reflexion.mp3",
    "next": "s_dazai_sourire"
  },
  {
    "id": "s_dazai_sourire",
    "bg": "images/backgrounds/caferieur.webp",
    "character": "Dazai",
    "charImg": null,
    "speaker": null,
    "text": "Il hausse les épaules, un léger sourire aux lèvres.",
    "typeSpeed": 20,
    "music": "music/reflexion.mp3",
    "next": "s_dazai_souriree"
  },
  {
    "id": "s_dazai_souriree",
    "bg": "images/backgrounds/cafespeak.webp",
    "character": "Dazai",
    "charImg": null,
    "speaker": "Dazai",
    "text": "Oh, je pensais simplement à ce qu’on va manger ce soir.",
    "typeSpeed": 18,
    "music": "music/reflexion.mp3",
    "next": "s_proposition_diner"
  },
  {
    "id": "s_choix3_rien",
    "bg": "images/backgrounds/cafesmile.webp",
    "character": "Atsushi",
    "charImg": null,
    "speaker": "Atsushi",
    "text": "Rien d'important.",
    "typeSpeed": 12,
    "music": "music/reflexion.mp3",
    "next": "s_dazai_evasif"
  },
  {
    "id": "s_dazai_evasif",
    "bg": "images/backgrounds/caferieur.webp",
    "character": "Dazai",
    "charImg": null,
    "speaker": "Dazai",
    "text": "Je vois...Je me demande ce qu’on va manger ce soir.",
    "typeSpeed": 20,
    "music": "music/reflexion.mp3",
    "next": "s_dazai_evasiff"
  },
  {
    "id": "s_dazai_evasiff",
    "bg": "images/backgrounds/dazaicafethink.webp",
    "character": "Dazai",
    "charImg": null,
    "speaker": "Dazai",
    "text": "Il détourne son regard, évasif",
    "typeSpeed": 20,
    "music": "music/reflexion.mp3",
    "next": "s_proposition_diner"
  },
  {
    "id": "s_proposition_diner",
    "bg": "images/backgrounds/dazaicafethink.webp",
    "character": null,
    "charImg": null,
    "speaker": null,
    "text": "Je devrais peut-être suggérer qu’on prépare le dîner ensemble. C’est une bonne occasion d’apprendre plus sur lui en dehors du travail.",
    "typeSpeed": 25,
    "music": "music/reflexion.mp3",
    "next": "s_atsushi_propose"
  },
  {
    "id": "s_atsushi_propose",
    "bg": "images/backgrounds/dazaiwatch.webp",
    "character": "Atsushi",
    "charImg": null,
    "speaker": "Atsushi",
    "text": "Je ne crois pas que quelqu’un ait prévu quoi que ce soit pour ce soir. Et si c’était nous qui le préparions ?",
    "typeSpeed": 20,
    "music": "music/reflexion.mp3",
    "next": "s_dazai_surpris"
  },
  {
    "id": "s_dazai_surpris",
    "bg": "images/backgrounds/thinkspeak.webp",
    "character": "Dazai",
    "charImg": null,
    "speaker": "Dazai",
    "text": "Ce n’est pas vraiment notre rôle, tu es sûr de toi ?",
    "typeSpeed": 18,
    "music": "music/reflexion.mp3",
    "choices": [
      {
        "text": "On n’a aucune mission aujourd’hui, de toute façon.",
        "affinityDelta": 0,
        "next": "s_mission_ok"
      },
      {
        "text": "Apparemment, la cuisinière est malade.",
        "affinityDelta": -10,
        "next": "s_cuisiniere_malade"
      },
      {
        "text": "Pour être honnête… j’ai envie de goûter ta cuisine.",
        "affinityDelta": 10,
        "next": "s_envie_gouter"
      }
    ]
  },
  {
    "id": "s_mission_ok",
    "bg": "images/backgrounds/caferieur.webp",
    "character": "Dazai",
    "charImg": "images/characters/cafe.webp",
    "speaker": "Dazai",
    "text": "Effectivement, aucun compte à rendre. Alors autant profiter pour faire autre chose.",
    "typeSpeed": 20,
    "music": "music/reflexion.mp3",
    "next": "s_transition_marche"
  },
  {
    "id": "s_cuisiniere_malade",
    "bg": "images/backgrounds/caferieur.webp",
    "character": "Dazai",
    "charImg": "images/characters/dazai_idle.webp",
    "speaker": "Dazai",
    "text": "Dans ce cas, on n’a pas le choix. Sauvons le dîner, Atsushi-kun.",
    "typeSpeed": 18,
    "music": "music/reflexion.mp3",
    "next": "s_transition_marche"
  },
  {
    "id": "s_envie_gouter",
    "bg": "images/backgrounds/caferieur.webp",
    "character": "Dazai",
    "charImg": "images/characters/dazai_amuse.webp",
    "speaker": "Dazai",
    "text": "Haha, je ne sais pas cuisiner, Atsushi-kun, mais à nous deux ça ne devrait pas être terrible.",
    "typeSpeed": 15,
    "music": "music/reflexion.mp3",
    "next": "s_transition_marche"
  },
  {
    "id": "s_transition_marche",
    "bg": "images/backgrounds/cafesmile.webp",
    "character": "Dazai",
    "charImg": "images/characters/dazai_depart.webp",
    "speaker": "Dazai",
    "text": "Pas de dîner sans courses. Allez, direction le marché.",
    "typeSpeed": 15,
    "music": "music/reflexion.mp3",
    "next": "s_quitter_table"
  },
  {
    "id": "s_quitter_table",
    "bg": "images/backgrounds/cafetaria.webp",
    "character": null,
    "charImg": null,
    "speaker": null,
    "text": "Nous quittons notre table, laissant l’odeur du café derrière nous.",
    "typeSpeed": 20,
    "music": "music/reflexion.mp3",
    "next": "s_marche_arrivee"
  },
  {
    "id": "s_marche_arrivee",
    "bg": "images/backgrounds/marche.webp",
    "character": null,
    "charImg": null,
    "speaker": null,
    "text": "Nous arrivons devant les étals. L'odeur des légumes frais et des épices nous entoure.",
    "typeSpeed": 20,
    "music": "music/out.mp3",
    "next": "s_marche_daza"
  },
  {
    "id": "s_marche_daza",
    "bg": "images/backgrounds/marche.webp",
    "character": "Dazai",
    "charImg": "images/characters/distract.webp",
    "speaker": null,
    "text": "Dazai plisse les yeux en regardant les crustacés et se tourne vers moi. ",
    "typeSpeed": 22,
    "music": "music/out.mp3",
    "next": "s_marche_dazai"
  },
  {
    "id": "s_marche_dazai",
    "bg": "images/backgrounds/marche.webp",
    "character": "Dazai",
    "charImg": "images/characters/forehand.webp",
    "speaker": "Dazai",
    "text": "Bon, Atsushi-kun. C'est toi qui as proposé qu'on cuisine. Alors, qu'est-ce qu'on prépare ce soir ?",
    "typeSpeed": 22,
    "music": "music/out.mp3",
    "choices": [
      {
        "text": "Crabe",
        "affinityDelta": 10,
        "next": "s_crabe_choix"
      },
      {
        "text": "Curry",
        "affinityDelta": 0,
        "next": "s_curry_choix"
      },
      {
        "text": "Nouilles",
        "affinityDelta": -10,
        "next": "s_nouilles_choix"
      }
    ]
  },
  {
    "id": "s_crabe_choix",
    "bg": "images/backgrounds/marche.webp",
    "character": "Dazai",
    "charImg": "images/characters/forehandsmile.webp",
    "speaker": "Dazai",
    "text": "Tu tombes bien. J’adore ça.",
    "typeSpeed": 12,
    "music": "music/out.mp3",
    "next": "s_atsushi_partant"
  },
  {
    "id": "s_curry_choix",
    "bg": "images/backgrounds/marche.webp",
    "character": "Dazai",
    "charImg": "images/characters/speakserious.webp",
    "speaker": "Dazai",
    "text": "Je ne vois pas d’épices ici. Par contre, le crabe, il est juste là.",
    "typeSpeed": 18,
    "music": "music/out.mp3",
    "next": "s_atsushi_partant"
  },
  {
    "id": "s_nouilles_choix",
    "bg": "images/backgrounds/marche.webp",
    "character": "Dazai",
    "charImg": "images/characters/speakserious.webp",
    "speaker": "Dazai",
    "text": "Sauf qu’on en mange tout le temps à l’agence. Regarde ce crabe, il est magnifique. On prend ça ?",
    "typeSpeed": 20,
    "music": "music/out.mp3",
    "next": "s_atsushi_partant"
  },
  {
    "id": "s_atsushi_partant",
    "bg": "images/backgrounds/marche.webp",
    "character": "Atsushi",
    "charImg": "images/characters/smilecross.webp",
    "speaker": "Atsushi",
    "text": "Je suis partant pour le crabe.",
    "typeSpeed": 12,
    "music": "music/out.mp3",
    "next": "s_glutamate_intro"
  },
  {
    "id": "s_glutamate_intro",
    "bg": "images/backgrounds/marche.webp",
    "character": "Dazai",
    "charImg": "images/characters/happyspeak.webp",
    "speaker": "Dazai",
    "text": "Tu sais, Atsushi-kun, le secret d’un bon crabe, c’est le glutamate. On va en mettre plein, et ce sera délicieux !",
    "typeSpeed": 20,
    "music": "music/out.mp3",
    "next": "s_glutamate_question"
  },
  {
    "id": "s_glutamate_question",
    "bg": "images/backgrounds/marche.webp",
    "character": "Atsushi",
    "charImg": "images/characters/smilecross.webp",
    "speaker": "Atsushi",
    "text": "Des glutamates ?",
    "typeSpeed": 15,
    "music": "music/out.mp3",
    "next": "s_glutamate_reponse"
  },
  {
    "id": "s_glutamate_reponse",
    "bg": "images/backgrounds/marche.webp",
    "character": "Dazai",
    "charImg": "images/characters/boxhand.webp",
    "speaker": "Dazai",
    "text": "Oui, environ 4 à 5 boîtes.",
    "typeSpeed": 15,
    "music": "music/out.mp3",
    "next": "s_glutamate_pensee"
  },
  {
    "id": "s_glutamate_pensee",
    "bg": "images/backgrounds/marche.webp",
    "character": null,
    "charImg": "images/characters/smilecross.webp",
    "speaker": null,
    "text": "Q… Quoi ? Une pince aurait suffi ! Une telle quantité, c'est dangereux…",
    "typeSpeed": 20,
    "music": "music/out.mp3",
    "next": "s_glutamate_hesitation"
  },
  {
    "id": "s_glutamate_hesitation",
    "bg": "images/backgrounds/marche.webp",
    "character": "Atsushi",
    "charImg": "images/characters/smilecross.webp",
    "speaker": "Atsushi",
    "text": "Hmm… Je ne suis pas sûr que ce soit une bonne idée.",
    "typeSpeed": 18,
    "music": "music/out.mp3",
    "choices": [
      {
        "text": "Accepter",
        "affinityDelta": 10,
        "next": "s_glutamate_oui"
      },
      {
        "text": "Refuser",
        "affinityDelta": -10,
        "next": "s_glutamate_non_action"
      }
    ]
  },
  {
    "id": "s_glutamate_oui",
    "bg": "images/backgrounds/marche.webp",
    "character": "Atsushi",
    "charImg": "images/characters/smileeyes.webp",
    "speaker": "Atsushi",
    "text": "Bon, d’accord… vas-y pour le glutamate.",
    "typeSpeed": 15,
    "music": "music/out.mp3",
    "next": "s_glutamate_oui_dazai"
  },
  {
    "id": "s_glutamate_oui_dazai",
    "bg": "images/backgrounds/marche.webp",
    "character": "Dazai",
    "charImg": "images/characters/happyspeak.webp",
    "speaker": "Dazai",
    "text": "Ça va être incroyable, Atsushi-kun !",
    "typeSpeed": 18,
    "music": "music/out.mp3",
    "next": "s_buy_ingredient_minigame"
  },
  {
    "id": "s_glutamate_non_action",
    "bg": "images/backgrounds/marche.webp",
    "character": null,
    "charImg": "images/characters/decupocket.webp",
    "speaker": null,
    "text": "Dazai soupire légèrement, puis sourit avec une once d’humour.",
    "typeSpeed": 20,
    "music": "music/out.mp3",
    "next": "s_glutamate_non_parole"
  },
  {
    "id": "s_glutamate_non_parole",
    "bg": "images/backgrounds/marche.webp",
    "character": "Dazai",
    "charImg": "images/characters/speakpocket.webp",
    "speaker": "Dazai",
    "text": "D’accord. Mais alors je compte sur toi, Atsushi-kun. Parce que moi, à part le glutamate, je ne sais pas quoi mettre.",
    "typeSpeed": 20,
    "music": "music/out.mp3",
    "nextJson": "chapter2.json",
    "nextSceneId": "cuisine_debut"
  }
]