# json.extract! @bulletin, :id, :email, :nom, :prenom, :created_at, :updated_at
# json.debut @bulletin.debut
json.fin @bulletin.fin
json.page @page_index || @bulletin.page(@page)
json.visite @visite || @bulletin.trace.try(:[], @page).try(:size)
