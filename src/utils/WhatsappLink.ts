const treat = (str: string, { replace = '' } = {}) =>
  str.split(' ').join(replace);

interface IWhatsLink {
  phone_number: string | null;
  custom_message: string | null;
}

const whatsappLink = ({ phone_number, custom_message }: IWhatsLink) => {
  if (!phone_number && !custom_message) return false;

  const isWeb = false;

  const baseUrl = `https://${isWeb ? 'web' : 'api'}.whatsapp.com/send`;

  const hasPhone = phone_number ? `phone=${phone_number}` : undefined;
  const hasText = custom_message
    ? `text=${treat(custom_message, { replace: '%20' })}`
    : undefined;

  const filtering = [hasText, hasPhone].filter(Boolean);
  const queries = filtering.join('&');

  return `${baseUrl}?${queries}`;
};

export default whatsappLink;
