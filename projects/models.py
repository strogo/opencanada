from __future__ import absolute_import, division, unicode_literals

from django.db import models
from django.utils.encoding import python_2_unicode_compatible
from wagtail.wagtailadmin.edit_handlers import (FieldPanel, MultiFieldPanel,
                                                ObjectList, RichTextFieldPanel,
                                                TabbedInterface)
from wagtail.wagtailcore.fields import RichTextField
from wagtail.wagtailcore.models import Page
from wagtail.wagtailsearch import index

from themes.models import ThemeablePage


class ProjectListPage(ThemeablePage):
    subpage_types = ['ProjectPage']

    style_panels = ThemeablePage.style_panels

    edit_handler = TabbedInterface([
        ObjectList(Page.content_panels, heading='Content'),
        ObjectList(style_panels, heading='Page Style Options'),
        ObjectList(Page.promote_panels, heading='Promote'),
        ObjectList(Page.settings_panels, heading='Settings', classname="settings"),
    ])


@python_2_unicode_compatible
class ProjectPage(ThemeablePage):
    description = RichTextField(blank=True, default="")

    search_fields = Page.search_fields + (
        index.SearchField('description', partial_match=True),
    )

    def search_result_text(self):
        if self.description:
            self.search_result_text = self.description[0:240]
        return self.search_result_text

    def __str__(self):
        return "{}".format(self.title)

    content_panels = Page.content_panels + [
        RichTextFieldPanel('description'),
    ]

    style_panels = ThemeablePage.style_panels

    edit_handler = TabbedInterface([
        ObjectList(content_panels, heading='Content'),
        ObjectList(style_panels, heading='Page Style Options'),
        ObjectList(Page.promote_panels, heading='Promote'),
        ObjectList(Page.settings_panels, heading='Settings', classname="settings"),
    ])
