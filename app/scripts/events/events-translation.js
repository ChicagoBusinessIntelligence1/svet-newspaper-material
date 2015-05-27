(function () {
    'use strict'
    angular.module('events')
        .config(['$translateProvider', function ($translateProvider) {
            $translateProvider.useCookieStorage();
            $translateProvider.translations('en', {
                'events': 'Events',
                'save-changes': 'Save Changes',
                'event-type': 'Event Type',
                'all-events': 'All Events',
                'activity-events': 'Activity and Events',
                'purchase-tickets': 'Purchase Tickets',
                'upcoming-events': 'Upcoming Events',
                'visited-events': 'Visited Events',
                'planned-events': 'Planned Events',
                'create-event': 'Create an Event',
                'svet-network-events': 'Svet Network Events',
                'svet-public-events': 'Svet Public Events',
                'new-event': 'New Event',
                'friends': 'Friends',
                'events-calendar': 'Events 2015',
                'upcoming-svet-event': 'Upcoming Svet Event',
                'event-ad-title': 'Family Public Event',
                'event-ad-body': 'A very special and fun SVET Family Event at Kohl Children\'s Museum on May 5.',
                'families-event': 'Families are goings',
                'join-tip': 'Click to register for visiting this event',
                'unlink-tip': 'Click to un-register from visiting this event',
                'join': 'Register',
                'unlink': 'Un-register',
                'accept': 'Accept',
                'reject': 'Reject',
                'accepted': 'Accepted',
                'rejected': 'Rejected'
            });
            $translateProvider.translations('ru', {
                'save-changes': 'Сохранить Изменения',
                'events': 'Мероприятия',
                'event-type': 'Тип Мероприятия',
                'chicago-community-events': 'Афиша Чикаго',
                'all-events': 'Афиша Чикаго',
                'activity-events': 'События и Мероприятия',
                'purchase-tickets': 'Приобрести билеты',
                'upcoming-events': 'Ближайшие События',
                'visited-events': ' Посещенные Мероприятия',
                'planned-events': 'Запланированные  Мероприятия',
                'create-event': 'Создать Мероприятие',
                'new-event': 'Новое Мероприятие',
                'svet-public-events': 'Свет Открытые Мероприятия',
                'svet-network-events': 'Свет Бизнес Мероприятия',
                'friends': 'Друзья',
                'events-calendar': 'Афиша 2015',
                'upcoming-svet-event': 'Свет Приглашает',
                'event-ad-title': 'Семейное Мероприятие.',
                'event-ad-body': '5 Мая Свет пгиглашает на увлекательное мероприятие для всей семьи в Детском Музее Kohl.',
                'families-event': 'Семей Придут',
                'join-tip': 'Кликните чтобы зарегистрироваться',
                'unlink-tip': 'Отменить регистрацию на посещение',
                'join': 'Пойду',
                'unlink': 'Отменить',
                'accept': 'Принять',
                'reject': 'Отклонить',
                'accepted': 'Принят',
                'rejected': 'Отклонен'
            });
            $translateProvider.preferredLanguage('en');
        }]);
})();
