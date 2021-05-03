'use strict';

import firebase from 'firebase';


export const version = '22.2.2';
let s: number;
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).get().then((d) => {
        s = d.get('path');
    });
export const sep = s;
