from __future__ import absolute_import, unicode_literals

from .production import *

ROOT_URLCONF = 'opencanada.urls_admin'

PREPEND_WWW = False

CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.locmem.LocMemCache',
    }
}

IS_PRODUCTION = False
ADMIN_ENABLED = True

SITE_ID = 3
