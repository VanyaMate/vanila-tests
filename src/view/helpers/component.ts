const parser = new DOMParser();

export const component = function (data: Record<string, any>, html: string) {
    Object.entries(data).forEach(([ key, value ]) => {
        html = html.replace(new RegExp(`{{${key}}}`, 'gi'), value);
    });

    const children = [ ...parser.parseFromString(html, 'text/html').children ];

    return (position: InsertPosition, to: Element) => {
        children.forEach((child) => to.insertAdjacentElement(position, child));
    };
};