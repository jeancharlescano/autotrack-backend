-- table : vehicules
create table vehicules (
    immatriculation varchar(20) primary key,
    marque varchar(50),
    modele varchar(50),
    annee int,
    motorisation varchar(50),
    kilometrage int,
    carburant varchar(30),
    puissance int,
    taille_pneu varchar(20),
    image bytea
);

-- table : entretien
create table entretien (
    id serial primary key,
    titre varchar(100),
    prix numeric(10, 2),
    kilometrage int,
    date date,
    facture bytea,
    vehicule_immat varchar(20),
    foreign key (vehicule_immat) references vehicules(immatriculation) on delete cascade
);

-- table : piece
create table piece (
    id serial primary key,
    nom varchar(100)
);

-- table : changer (liaison entre entretien et piece)
create table changer (
    entretien_id int,
    piece_id int,
    prix_piece numeric(10, 2),
    primary key (entretien_id, piece_id),
    foreign key (entretien_id) references entretien(id) on delete cascade,
    foreign key (piece_id) references piece(id) on delete cascade
);
