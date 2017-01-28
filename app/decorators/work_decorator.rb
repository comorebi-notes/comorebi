module WorkDecorator
  def models_for_select(models)
    models.map do |model|
      ["#{format("%02d", model[:id])}: #{model[:title]}", model[:id]]
    end
  end

  def localed_category(_category=nil)
    category_name = _category || self.category
    t("activerecord.attributes.work.categories.#{category_name}")
  end

  def localed_status(_status=nil)
    status_name = _status || self.status
    t("activerecord.attributes.work.statuses.#{status_name}")
  end

  def localed_categories_for_select
    Work.categories.map do |category, index|
      ["#{format("%02d", index)}: #{localed_category(category)}", category]
    end
  end

  def localed_statuses_for_select
    Work.statuses.map do |status, index|
      ["#{format("%02d", index)}: #{localed_status(status)}", status]
    end
  end
end
