import {
    trigger,
    animate,
    transition,
    style,
    query,
    state
  } from '@angular/animations';
  
  export const fadeAnimation = trigger('fadeAnimation', [
    transition('* => *', [
      query(
        ':enter',
        [style({ opacity: 0 })],
        { optional: true }
      ),
      query(
        ':leave',
        [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
        { optional: true }
      ),
      query(
        ':enter',
        [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
        { optional: true }
      )
    ])
  ]);

  export const slideInOutAnimation =
    trigger('slideInOutAnimation', [

        state('*', style({
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
        })),

        transition(':enter', [

            style({
                right: '-400%',

                backgroundColor: 'rgba(0, 0, 0, 0)'
            }),

            animate('.5s ease-in-out', style({
                right: 0,

                backgroundColor: 'rgba(0, 0, 0, 0.8)'
            }))
        ]),

        transition(':leave', [
            animate('.5s ease-in-out', style({
                right: '-400%',

                backgroundColor: 'rgba(0, 0, 0, 0)'
            }))
        ])
    ]);